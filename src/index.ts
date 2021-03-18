/**
 * Schemats takes sql database schema and creates corresponding typescript definitions
 * Created by xiamx on 2016-08-10.
 */
// tslint:disable

import { generateEnumType, generateTableInterface, normalizeName, toCamelCase } from './typescript'
import { getDatabase, Database } from './schema'
import Options, { OptionValues } from './options'
import { processString, Options as ITFOptions } from 'typescript-formatter'
import { PostgresDatabase } from './schemaPostgres'

const pkgVersion = require('../package.json').version

function buildHeader(db: PostgresDatabase, tables: string[], schema: string | null, options: OptionValues): string {
  let commands = ['pg-to-ts', 'generate', '-c', db.connectionString.replace(/:\/\/.*@/, '://username:password@')]
  if (options.camelCase) commands.push('-C')
  if (tables.length > 0) {
    tables.forEach((t: string) => {
      commands.push('-t', t)
    })
  }
  if (schema) {
    commands.push('-s', schema)
  }

  return `
        /**
         * AUTO-GENERATED FILE - DO NOT EDIT!
         *
         * This file was automatically generated by pg-to-ts v.${pkgVersion}
         * $ ${commands.join(' ')}
         *
         */

    `
}

export async function typescriptOfTable(
  db: PostgresDatabase,
  table: string,
  schema: string,
  options = new Options()
) {
  let tableTypes = await db.getTableTypes(table, schema, options)
  return generateTableInterface(table, tableTypes, options)
}

export async function typescriptOfSchema(dbIn: PostgresDatabase | string,
  tables: string[] = [],
  excludedTables: string[] = [],
  schema: string | null = null,
  options: OptionValues = {}
): Promise<string> {
  const db = (typeof dbIn === 'string') ? getDatabase(dbIn) : dbIn;

  if (!schema) {
    schema = db.getDefaultSchema()
  }

  if (tables.length === 0) {
    tables = (await db.getSchemaTables(schema))
      .filter(t => excludedTables.indexOf(t) == -1);
  }

  const optionsObject = new Options(options)

  const enumTypes = generateEnumType(await db.getEnumTypes(schema), optionsObject)
  const interfacePromises = tables.map((table) => typescriptOfTable(db, table, schema as string, optionsObject))
  const interfacePairs = await Promise.all(interfacePromises);

  const interfaces = interfacePairs.map(([ts]) => ts).join('');
  const typesToImport = new Set<string>();
  for (const types of interfacePairs.map(([_, types]) => types)) {
    types.forEach(typesToImport.add, typesToImport);
  }
  let importTs = '';
  if (options.jsonTypesFile && typesToImport.size) {
    const symbols = Array.from(typesToImport).join(', ');
    importTs = `import {${symbols}} from "${options.jsonTypesFile}";\n\n`;
  }

  const tableNames = tables.map(t => normalizeName(optionsObject.transformTypeName(t), optionsObject));
  const typeMaps = tableNames.map(tableName => `
    ${tableName}: {
      select: ${toCamelCase(tableName)};
      input: ${toCamelCase(tableName)}Input;
    };`).join('');
  const tableMap = tableNames.join(',\n  ');

  let output = '/* tslint:disable */\n/* eslint-disable */\n\n'
  if (optionsObject.options.writeHeader) {
    output += buildHeader(db, tables, schema, options)
  }

  // TODO(danvk): This is a better type than unknown, but typescript-json-schema chokes on it.
  // type Json =
  // | string
  // | number
  // | boolean
  // | null
  // | { [property: string]: Json }
  // | Json[];

  output += importTs;
  output += `
  export type Json = unknown;
    `;

  output += enumTypes
  output += interfaces
  output += `

  export interface TableTypes {${typeMaps}
  }

  export const tables = {
    ${tableMap},
  }
  `;

  const formatterOption: ITFOptions = {
    replace: false,
    verify: false,
    tsconfig: true,
    tslint: true,
    editorconfig: true,
    tsfmt: true,
    vscode: false,
    tsconfigFile: null,
    tslintFile: null,
    vscodeFile: null,
    tsfmtFile: null,
  }

  const processedResult = await processString('schema.ts', output, formatterOption)
  return processedResult.dest.replace(/    /g, '  ');
}

export { Database, getDatabase } from './schema'
export { Options, OptionValues }
