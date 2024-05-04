/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { UserServerPermissionEnum } from '../models/entities/user/enums/user-server-permission.enum';

@Pipe({
  name: 'userServerPermissionEnum',
  standalone: true,
})
export class UserServerPermissionEnumPipe implements PipeTransform {
  transform(permission: UserServerPermissionEnum): string {
    return this.transformServerPermission(permission as UserServerPermissionEnum);
  }

  transformServerPermission(permission: UserServerPermissionEnum): string {
    let msg = '';
    switch (permission) {
      case UserServerPermissionEnum.CLIENT_REGISTRATION:
        msg = 'Client Registration';
        break;
      case UserServerPermissionEnum.BATCH_DETAILS:
        msg = 'Batch Details';
        break;
      case UserServerPermissionEnum.AUDIT_REPORT:
        msg = 'Audit Report';
        break;
      case UserServerPermissionEnum.PRODUCTION_REPORT:
        msg = 'Production Report';
        break;
      case UserServerPermissionEnum.SYSTEM_SETTINGS:
        msg = 'System Settings';
        break;
      case UserServerPermissionEnum.SERVER_SETTINGS:
        msg = 'Server Settings';
        break;
      case UserServerPermissionEnum.USER_MANAGEMENT:
        msg = 'User Management';
        break;
      case UserServerPermissionEnum.THIRDPARTY_SETTINGS:
        msg = 'Third Party Settings';
        break;
      case UserServerPermissionEnum.HELP:
        msg = 'Help';
        break;
    }
    return msg;
  }
}
