/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { UserRoleTypeEnum } from '../../../../../shared/models/entities/user/enums/user-role-type.enum';

@Pipe({
    name: 'userTypeEnum',
    standalone: true,
})
export class UserTypeEnumPipe implements PipeTransform {
    transform(userType: UserRoleTypeEnum): string {
        let msg = '';
        switch (userType) {
            case UserRoleTypeEnum.ADMIN:
                msg = 'Admin';
                break;
            case UserRoleTypeEnum.SUPERVISOR:
                msg = 'Supervisor';
                break;
            case UserRoleTypeEnum.OPERATOR:
                msg = 'Operator';
                break;
            case UserRoleTypeEnum.QA:
                msg = 'QA';
                break;
            case UserRoleTypeEnum.PRODUCTION:
                msg = 'Production';
                break;
        }
        return msg;
    }
}
