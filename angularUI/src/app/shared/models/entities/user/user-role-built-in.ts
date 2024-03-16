import { BaseEntity } from '../../common/base-entity.model';
import { UserRoleTypeEnum } from './enums/user-role-type.enum';
import { UserPermission } from './user.permission';

export class UserRoleBuiltIn extends BaseEntity {
  name!: string;
  userPermissions: UserPermission[] = [];
  roleType!: UserRoleTypeEnum;
}
