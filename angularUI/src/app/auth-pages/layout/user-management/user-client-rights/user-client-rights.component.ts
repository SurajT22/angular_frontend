import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { UserRightsComponent } from '../component/user-rights/user-rights.component';
import { UserClientPermissionEnum } from '../../../../shared/models/entities/user/enums/user-client-permission.enum';
import { UserClientRightsService } from './user-client-rights.service';
import { UserClientPermission } from '../../../../shared/models/entities/user/user-client-permission.model';

@Component({
  selector: 'app-user-client-rights',
  standalone: true,
  imports: [
    UserRightsComponent
  ],
  templateUrl: './user-client-rights.component.html',
  styleUrl: './user-client-rights.component.scss'
})
export class UserClientRightsComponent extends BaseComponent {
  userClientRightsService = inject(UserClientRightsService)
  
  availablePermissions!: any[];
  selectedUserName: string = "";
  userPermission: UserClientPermission;

  constructor(){
    super();
    this.userPermission = new UserClientPermission();
    this.mapToPermissionArray(this.userPermission);
  }

  onUserChange(userName:string){
    this.selectedUserName = userName;
    this.getClientRights();
  }

  getClientRights(){
    this.userClientRightsService.getClientRights(this.selectedUserName)
    .subscribe((response)=>{
      this.mapToPermissionArray(response);
    });
  }

  onSaveBtnClick(){
    this.mapToPermissionObject();
    this.userClientRightsService.updateClientRights(this.selectedUserName, this.userPermission)
    .subscribe(()=>{
      
    });
  }

  mapToPermissionObject(){
    this.availablePermissions.forEach((x) => {
      switch(x.permission as UserClientPermissionEnum){
        case UserClientPermissionEnum.INSPECTION:
          this.userPermission.Inspection = x.checked;
          break;
        case UserClientPermissionEnum.RECIPE:
          this.userPermission.Recipe = x.checked;
          break;
        case UserClientPermissionEnum.BATCH_DETAIL:
          this.userPermission.Batch_Detail = x.checked;
          break;
        case UserClientPermissionEnum.TEACH:
          this.userPermission.Teach = x.checked;
          break;
        case UserClientPermissionEnum.USER_MANAGEMENT:
          this.userPermission.User_Management = x.checked;
          break;
        case UserClientPermissionEnum.CAMERA_SETTINGS:
          this.userPermission.Camera_Settings = x.checked;
          break;
        case UserClientPermissionEnum.HARDWARE_SETTINGS:
          this.userPermission.Hardware_Settings = x.checked;
          break;
        case UserClientPermissionEnum.PRINTER_SETTINGS:
          this.userPermission.Printer_Settings = x.checked;
          break;
        case UserClientPermissionEnum.SERVER_SETTINGS:
          this.userPermission.Server_Settings = x.checked;
          break;
        case UserClientPermissionEnum.THIRD_PARTY_SETTINGS:
          this.userPermission.Third_Party_Settings = x.checked;
          break;
        case UserClientPermissionEnum.SYSTEM_SETTINGS:
          this.userPermission.System_Settings = x.checked;
          break;
        case UserClientPermissionEnum.TEST_IO:
          this.userPermission.Test_IO = x.checked;
          break;
        case UserClientPermissionEnum.FAULT_IMAGES:
          this.userPermission.Fault_Images = x.checked;
          break;
        case UserClientPermissionEnum.PRODUCTION_REPORT:
          this.userPermission.Production_Report = x.checked;
          break;
        case UserClientPermissionEnum.AUDIT_REPORT:
          this.userPermission.Audit_Report = x.checked;
          break;
        case UserClientPermissionEnum.HELP:
          this.userPermission.Help = x.checked;
          break;
        case UserClientPermissionEnum.INFO:
          this.userPermission.Info = x.checked;
          break;
        case UserClientPermissionEnum.RECONCILIATION:
          this.userPermission.Reconciliation = x.checked;
          break;
        case UserClientPermissionEnum.WAREHOUSE:
          this.userPermission.Warehouse = x.checked;
          break;
        case UserClientPermissionEnum.SERVER_ACCESS:
          this.userPermission.server_access = x.checked;
          break;
        case UserClientPermissionEnum.BATCH_ACCESS:
          this.userPermission.batch_access = x.checked;
          break;
        case UserClientPermissionEnum.BATCH_UPLOAD_ACCESS:
          this.userPermission.batch_upload_access = x.checked;
          break;
      }
    });
  }

  mapToPermissionArray(userPermission: UserClientPermission){
    this.availablePermissions = [
      {checked:userPermission.Inspection, permission: UserClientPermissionEnum.INSPECTION},
      {checked:userPermission.Recipe, permission: UserClientPermissionEnum.RECIPE},
      {checked:userPermission.Batch_Detail, permission: UserClientPermissionEnum.BATCH_DETAIL},
      {checked:userPermission.Teach, permission: UserClientPermissionEnum.TEACH},
      {checked:userPermission.User_Management, permission: UserClientPermissionEnum.USER_MANAGEMENT},
      {checked:userPermission.Camera_Settings, permission: UserClientPermissionEnum.CAMERA_SETTINGS},
      {checked:userPermission.Hardware_Settings, permission: UserClientPermissionEnum.HARDWARE_SETTINGS},
      {checked:userPermission.Printer_Settings, permission: UserClientPermissionEnum.PRINTER_SETTINGS},
      {checked:userPermission.Server_Settings, permission: UserClientPermissionEnum.SERVER_SETTINGS},
      {checked:userPermission.Third_Party_Settings, permission: UserClientPermissionEnum.THIRD_PARTY_SETTINGS},
      {checked:userPermission.System_Settings, permission: UserClientPermissionEnum.SYSTEM_SETTINGS},
      {checked:userPermission.Test_IO, permission: UserClientPermissionEnum.TEST_IO},
      {checked:userPermission.Fault_Images, permission: UserClientPermissionEnum.FAULT_IMAGES},
      {checked:userPermission.Production_Report, permission: UserClientPermissionEnum.PRODUCTION_REPORT},
      {checked:userPermission.Audit_Report, permission: UserClientPermissionEnum.AUDIT_REPORT},
      {checked:userPermission.Help, permission: UserClientPermissionEnum.HELP},
      {checked:userPermission.Info, permission: UserClientPermissionEnum.INFO},
      {checked:userPermission.Reconciliation, permission: UserClientPermissionEnum.RECONCILIATION},
      {checked:userPermission.Warehouse, permission: UserClientPermissionEnum.WAREHOUSE},
      {checked:userPermission.server_access, permission: UserClientPermissionEnum.SERVER_ACCESS},
      {checked:userPermission.batch_access, permission: UserClientPermissionEnum.BATCH_ACCESS},
      {checked:userPermission.batch_upload_access, permission: UserClientPermissionEnum.BATCH_UPLOAD_ACCESS},
    ];
  }
}
