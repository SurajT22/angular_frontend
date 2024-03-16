import { UserRoleTypeEnum } from "./enums/user-role-type.enum";

export class UserClientPermission {
  Inspection: boolean = false;
  Recipe: boolean = false;
  Batch_Detail: boolean = false;
  Teach: boolean = false;
  User_Management: boolean = false;
  Camera_Settings: boolean = false;
  Hardware_Settings: boolean = false;
  Printer_Settings: boolean = false;
  Server_Settings: boolean = false;
  Third_Party_Settings: boolean = false;
  System_Settings: boolean = false;
  Test_IO: boolean = false;
  Fault_Images: boolean = false;
  Production_Report: boolean = false;
  Audit_Report: boolean = false;
  Help: boolean = false;
  Info: boolean = false;
  Reconciliation: boolean = false;
  Warehouse: boolean = false;
  server_access: boolean = false;
  batch_access: boolean = false;
  batch_upload_access:boolean = false;
}

export class UserClientRightsReq{
  User_Rights!: UserClientPermission;
  UserName!: string;
}