/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { UserClientPermissionEnum } from '../models/entities/user/enums/user-client-permission.enum';

@Pipe({
  name: 'userPermissionEnum',
  standalone: true,
})
export class UserClientPermissionEnumPipe implements PipeTransform {
  transform(permission:  UserClientPermissionEnum): string {
    return this.transformClientPermission(permission as UserClientPermissionEnum);
  }

  transformClientPermission(permission: UserClientPermissionEnum): string {
    let msg = '';
    switch (permission) {
      case UserClientPermissionEnum.INSPECTION:
        msg = 'Inspection';
        break;
      case UserClientPermissionEnum.RECIPE:
        msg = 'Recipe';
        break;
      case UserClientPermissionEnum.BATCH_DETAIL:
        msg = 'Batch Detail';
        break;
      case UserClientPermissionEnum.TEACH:
        msg = 'Teach';
        break;
      case UserClientPermissionEnum.USER_MANAGEMENT:
        msg = 'User Management';
        break;
      case UserClientPermissionEnum.CAMERA_SETTINGS:
        msg = 'Camera Settings';
        break;
      case UserClientPermissionEnum.HARDWARE_SETTINGS:
        msg = 'Hardware Settings';
        break;
      case UserClientPermissionEnum.PRINTER_SETTINGS:
        msg = 'Printer Settings';
        break;
      case UserClientPermissionEnum.SERVER_SETTINGS:
        msg = 'Server Settings';
        break;
      case UserClientPermissionEnum.THIRD_PARTY_SETTINGS:
        msg = 'Third Party Settings';
        break;
      case UserClientPermissionEnum.SYSTEM_SETTINGS:
        msg = 'System Settings';
        break;
      case UserClientPermissionEnum.TEST_IO:
        msg = 'Test IO';
        break;
      case UserClientPermissionEnum.FAULT_IMAGES:
        msg = 'Fault Images';
        break;
      case UserClientPermissionEnum.PRODUCTION_REPORT:
        msg = 'Production Report';
        break;
      case UserClientPermissionEnum.AUDIT_REPORT:
        msg = 'Audit Report';
        break;
      case UserClientPermissionEnum.HELP:
        msg = 'Help';
        break;
      case UserClientPermissionEnum.INFO:
        msg = 'Info';
        break;
      case UserClientPermissionEnum.RECONCILIATION:
        msg = 'Reconciliation';
        break;
      case UserClientPermissionEnum.WAREHOUSE:
        msg = 'Warehouse';
        break;
      case UserClientPermissionEnum.SERVER_ACCESS:
        msg = 'Server Access';
        break;
      case UserClientPermissionEnum.BATCH_ACCESS:
        msg = 'Batch Access';
        break;
      case UserClientPermissionEnum.BATCH_UPLOAD_ACCESS:
        msg = 'Batch Upload Access';
        break;
    }
    return msg;
  }
}
