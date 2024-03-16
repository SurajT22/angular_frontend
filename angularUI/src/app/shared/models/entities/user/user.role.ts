import { BaseEntity } from '../../common/base-entity.model';
import { StatusEnum } from '../../common/enums/status.enum';
import { UserRoleTypeEnum } from './enums/user-role-type.enum';
import { UserPermission } from './user.permission';

export class UserRole extends BaseEntity {
  companyId!: string;
  name!: string;
  userPermissions: UserPermission[] = [];
  plantName!: string;
  plantId!: string;
  plantUnitName!: string;
  plantUnitId!: string;
  status!: StatusEnum;
  roleType!: UserRoleTypeEnum;
}
