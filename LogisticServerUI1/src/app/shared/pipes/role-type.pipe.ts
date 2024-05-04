import { Pipe, PipeTransform } from '@angular/core';
import { UserRoleTypeEnum } from '../models/entities/user/enums/user-role-type.enum';

@Pipe({
  name: 'roleType',
  standalone: true,
})
export class RoleTypePipe implements PipeTransform {
  transform(value: UserRoleTypeEnum): string {
    let roleType = '';
    switch (value) {
      case UserRoleTypeEnum.ADMIN:
        roleType = 'Admin';
        break;
      case UserRoleTypeEnum.SUPERVISOR:
        roleType = 'Supervisor';
        break;
      case UserRoleTypeEnum.OPERATOR:
        roleType = 'Operator';
        break;
      case UserRoleTypeEnum.QA:
        roleType = 'QA';
        break;
      case UserRoleTypeEnum.PRODUCTION:
        roleType = 'Production';
        break;
    }
    return roleType;
  }
}
