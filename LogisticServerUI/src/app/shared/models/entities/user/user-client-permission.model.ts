import { UserRoleTypeEnum } from "./enums/user-role-type.enum";

export class UserClientPermission {
  Inspection: boolean = false;
  Recipe: boolean = false;
  BatchDetail: boolean = false;
  Teach: boolean = false;
  UserManagement: boolean = false;
  CameraSettings: boolean = false;
  HardwareSettings: boolean = false;
  PrinterSettings: boolean = false;
  ServerSettings: boolean = false;
  ThirdPartySettings: boolean = false;
  SystemSettings: boolean = false;
  TestIO: boolean = false;
  FaultImages: boolean = false;
  ProductionReport: boolean = false;
  AuditReport: boolean = false;
  Help: boolean = false;
  Info: boolean = false;
  Reconciliation: boolean = false;
  Warehouse: boolean = false;
  ServerAccess: boolean = false;
  BatchAccess: boolean = false;
  BatchUploadAccess:boolean = false;
}

export class UserClientRightsReq{
  UserRights!: UserClientPermission;
  UserName!: string;
}