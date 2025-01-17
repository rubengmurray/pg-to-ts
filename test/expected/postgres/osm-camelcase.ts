/* tslint:disable */

export type FormatEnum = 'html' | 'markdown' | 'text';
export type UserStatusEnum =
  | 'active'
  | 'confirmed'
  | 'deleted'
  | 'pending'
  | 'suspended';

export namespace UsersFields {
  export type email = string;
  export type id = number;
  export type passCrypt = string;
  export type creationTime = Date;
  export type displayName = string;
  export type dataPublic = boolean;
  export type description = string;
  export type homeLat = number | null;
  export type homeLon = number | null;
  export type homeZoom = number | null;
  export type nearby = number | null;
  export type passSalt = string | null;
  export type imageFileName = string | null;
  export type emailValid = boolean;
  export type newEmail = string | null;
  export type creationIp = string | null;
  export type languages = string | null;
  export type status = UserStatusEnum;
  export type termsAgreed = Date | null;
  export type considerPd = boolean;
  export type preferredEditor = string | null;
  export type termsSeen = boolean;
  export type authUid = string | null;
  export type descriptionFormat = FormatEnum;
  export type imageFingerprint = string | null;
  export type changesetsCount = number;
  export type tracesCount = number;
  export type diaryEntriesCount = number;
  export type imageUseGravatar = boolean;
  export type imageContentType = string | null;
  export type authProvider = string | null;
  export type uuidColumn = string | null;
  export type number_ = number | null;
  export type string_ = string | null;
  export type moneyCol = number | null;
  export type charCol = string | null;
  export type timeCol = string | null;
  export type inetCol = string | null;
  export type jsonbCol = Object | null;
  export type numericCol = number | null;
  export type byteaCol = string | null;
  export type boolArrayCol = Array<boolean> | null;
  export type varcharArrayCol = Array<string> | null;
  export type int2ArrayCol = Array<number> | null;
  export type int4ArrayCol = Array<number> | null;
  export type int8ArrayCol = Array<number> | null;
  export type uuidArrayCol = Array<string> | null;
  export type textArrayCol = Array<string> | null;
  export type byteaArrayCol = Array<string> | null;
  export type realCol = number | null;
  export type doubleCol = number | null;
  export type timeWithTz = string | null;
  export type oidCol = number | null;
  export type intervalCol = string | null;
  export type jsonCol = Object | null;
  export type dateCol = Date | null;
  export type unspportedPathType = any | null;
  export type nameTypeCol = string | null;
  export type jsonArrayCol = Array<Object> | null;
  export type jsonbArrayCol = Array<Object> | null;
  export type timestamptzArrayCol = Array<Date> | null;
}

export interface Users {
  email: UsersFields.email;
  id: UsersFields.id;
  passCrypt: UsersFields.passCrypt;
  creationTime: UsersFields.creationTime;
  displayName: UsersFields.displayName;
  dataPublic: UsersFields.dataPublic;
  description: UsersFields.description;
  homeLat: UsersFields.homeLat;
  homeLon: UsersFields.homeLon;
  homeZoom: UsersFields.homeZoom;
  nearby: UsersFields.nearby;
  passSalt: UsersFields.passSalt;
  imageFileName: UsersFields.imageFileName;
  emailValid: UsersFields.emailValid;
  newEmail: UsersFields.newEmail;
  creationIp: UsersFields.creationIp;
  languages: UsersFields.languages;
  status: UsersFields.status;
  termsAgreed: UsersFields.termsAgreed;
  considerPd: UsersFields.considerPd;
  preferredEditor: UsersFields.preferredEditor;
  termsSeen: UsersFields.termsSeen;
  authUid: UsersFields.authUid;
  descriptionFormat: UsersFields.descriptionFormat;
  imageFingerprint: UsersFields.imageFingerprint;
  changesetsCount: UsersFields.changesetsCount;
  tracesCount: UsersFields.tracesCount;
  diaryEntriesCount: UsersFields.diaryEntriesCount;
  imageUseGravatar: UsersFields.imageUseGravatar;
  imageContentType: UsersFields.imageContentType;
  authProvider: UsersFields.authProvider;
  uuidColumn: UsersFields.uuidColumn;
  number: UsersFields.number_;
  string: UsersFields.string_;
  moneyCol: UsersFields.moneyCol;
  charCol: UsersFields.charCol;
  timeCol: UsersFields.timeCol;
  inetCol: UsersFields.inetCol;
  jsonbCol: UsersFields.jsonbCol;
  numericCol: UsersFields.numericCol;
  byteaCol: UsersFields.byteaCol;
  boolArrayCol: UsersFields.boolArrayCol;
  varcharArrayCol: UsersFields.varcharArrayCol;
  int2ArrayCol: UsersFields.int2ArrayCol;
  int4ArrayCol: UsersFields.int4ArrayCol;
  int8ArrayCol: UsersFields.int8ArrayCol;
  uuidArrayCol: UsersFields.uuidArrayCol;
  textArrayCol: UsersFields.textArrayCol;
  byteaArrayCol: UsersFields.byteaArrayCol;
  realCol: UsersFields.realCol;
  doubleCol: UsersFields.doubleCol;
  timeWithTz: UsersFields.timeWithTz;
  oidCol: UsersFields.oidCol;
  intervalCol: UsersFields.intervalCol;
  jsonCol: UsersFields.jsonCol;
  dateCol: UsersFields.dateCol;
  unspportedPathType: UsersFields.unspportedPathType;
  nameTypeCol: UsersFields.nameTypeCol;
  jsonArrayCol: UsersFields.jsonArrayCol;
  jsonbArrayCol: UsersFields.jsonbArrayCol;
  timestamptzArrayCol: UsersFields.timestamptzArrayCol;
}
