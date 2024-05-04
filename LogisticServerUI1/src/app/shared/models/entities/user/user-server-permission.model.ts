export class UserServerPermission {
  ClientRegistration!: boolean;
  BatchDetail!: boolean;
  AuditReport!: boolean;
  ProductionReport!: boolean;
  SystemSettings!: boolean;
  ServerSettings!: boolean;
  UserManagement!: boolean;
  ThirdPartySettings!: boolean;
  Help!: boolean;
}

export class UserServerRightsReq {
  UserRights!: UserServerPermission;
  UserName!: string;
}