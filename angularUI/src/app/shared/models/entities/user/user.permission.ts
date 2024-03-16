import { UserPermissionEnum } from './enums/user.permission.enum';

export class UserPermission {
  _id!: string;
  permissionId!: UserPermissionEnum;
  name!: string;
  description!: string;
}
