import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { UserRightsComponent } from '../component/user-rights/user-rights.component';
import { UserClientPermissionEnum } from '../../../../shared/models/entities/user/enums/user-client-permission.enum';
import { UserClientRightsService } from './user-client-rights.service';
import { UserClientPermission } from '../../../../shared/models/entities/user/user-client-permission.model';
import { takeUntil } from 'rxjs';

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
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.mapToPermissionArray(response);
    });
  }

  onSaveBtnClick(){
    this.mapToPermissionObject();
    this.userClientRightsService.updateClientRights(this.selectedUserName, this.userPermission)
    .pipe(takeUntil(this.destroy$))
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
          this.userPermission.BatchDetail = x.checked;
          break;
        case UserClientPermissionEnum.TEACH:
          this.userPermission.Teach = x.checked;
          break;
        case UserClientPermissionEnum.USER_MANAGEMENT:
          this.userPermission.UserManagement = x.checked;
          break;
        case UserClientPermissionEnum.CAMERA_SETTINGS:
          this.userPermission.CameraSettings = x.checked;
          break;
        case UserClientPermissionEnum.HARDWARE_SETTINGS:
          this.userPermission.HardwareSettings = x.checked;
          break;
        case UserClientPermissionEnum.PRINTER_SETTINGS:
          this.userPermission.PrinterSettings = x.checked;
          break;
        case UserClientPermissionEnum.SERVER_SETTINGS:
          this.userPermission.ServerSettings = x.checked;
          break;
        case UserClientPermissionEnum.THIRD_PARTY_SETTINGS:
          this.userPermission.ThirdPartySettings = x.checked;
          break;
        case UserClientPermissionEnum.SYSTEM_SETTINGS:
          this.userPermission.SystemSettings = x.checked;
          break;
        case UserClientPermissionEnum.TEST_IO:
          this.userPermission.TestIO = x.checked;
          break;
        case UserClientPermissionEnum.FAULT_IMAGES:
          this.userPermission.FaultImages = x.checked;
          break;
        case UserClientPermissionEnum.PRODUCTION_REPORT:
          this.userPermission.ProductionReport = x.checked;
          break;
        case UserClientPermissionEnum.AUDIT_REPORT:
          this.userPermission.AuditReport = x.checked;
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
          this.userPermission.ServerAccess = x.checked;
          break;
        case UserClientPermissionEnum.BATCH_ACCESS:
          this.userPermission.BatchAccess = x.checked;
          break;
        case UserClientPermissionEnum.BATCH_UPLOAD_ACCESS:
          this.userPermission.BatchUploadAccess = x.checked;
          break;
      }
    });
  }

  mapToPermissionArray(userPermission: UserClientPermission){
    this.availablePermissions = [
      {checked:userPermission.Inspection, permission: UserClientPermissionEnum.INSPECTION},
      {checked:userPermission.Recipe, permission: UserClientPermissionEnum.RECIPE},
      {checked:userPermission.BatchDetail, permission: UserClientPermissionEnum.BATCH_DETAIL},
      {checked:userPermission.Teach, permission: UserClientPermissionEnum.TEACH},
      {checked:userPermission.UserManagement, permission: UserClientPermissionEnum.USER_MANAGEMENT},
      {checked:userPermission.CameraSettings, permission: UserClientPermissionEnum.CAMERA_SETTINGS},
      {checked:userPermission.HardwareSettings, permission: UserClientPermissionEnum.HARDWARE_SETTINGS},
      {checked:userPermission.PrinterSettings, permission: UserClientPermissionEnum.PRINTER_SETTINGS},
      {checked:userPermission.ServerSettings, permission: UserClientPermissionEnum.SERVER_SETTINGS},
      {checked:userPermission.ThirdPartySettings, permission: UserClientPermissionEnum.THIRD_PARTY_SETTINGS},
      {checked:userPermission.SystemSettings, permission: UserClientPermissionEnum.SYSTEM_SETTINGS},
      {checked:userPermission.TestIO, permission: UserClientPermissionEnum.TEST_IO},
      {checked:userPermission.FaultImages, permission: UserClientPermissionEnum.FAULT_IMAGES},
      {checked:userPermission.ProductionReport, permission: UserClientPermissionEnum.PRODUCTION_REPORT},
      {checked:userPermission.AuditReport, permission: UserClientPermissionEnum.AUDIT_REPORT},
      {checked:userPermission.Help, permission: UserClientPermissionEnum.HELP},
      {checked:userPermission.Info, permission: UserClientPermissionEnum.INFO},
      {checked:userPermission.Reconciliation, permission: UserClientPermissionEnum.RECONCILIATION},
      {checked:userPermission.Warehouse, permission: UserClientPermissionEnum.WAREHOUSE},
      {checked:userPermission.ServerAccess, permission: UserClientPermissionEnum.SERVER_ACCESS},
      {checked:userPermission.BatchAccess, permission: UserClientPermissionEnum.BATCH_ACCESS},
      {checked:userPermission.BatchUploadAccess, permission: UserClientPermissionEnum.BATCH_UPLOAD_ACCESS},
    ];
  }
}
