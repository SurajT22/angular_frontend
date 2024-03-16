import { UserRoleTypeEnum } from "./enums/user-role-type.enum";

export class UserServerPermission {
  ClientRegistration!: boolean;
  BatchDetails!: boolean;
  AuditReport!: boolean;
  ProductionReport!: boolean;
  SystemSettings!: boolean;
  ServerSettings!: boolean;
  UserManagement!: boolean;
  ThirdPartySettings!: boolean;
}

export class UserServerRightsReq {
  User_Rights!: UserServerPermission;
  UserName!: string;
}