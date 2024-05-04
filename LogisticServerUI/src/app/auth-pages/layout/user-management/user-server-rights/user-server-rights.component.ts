import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { UserRightsComponent } from '../component/user-rights/user-rights.component';
import { UserServerPermissionEnum } from '../../../../shared/models/entities/user/enums/user-server-permission.enum';
import { UserServerRightsService } from './user-server-rights.service';
import { UserServerPermission } from '../../../../shared/models/entities/user/user-server-permission.model';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-server-rights',
  standalone: true,
  imports: [
    UserRightsComponent
  ],
  templateUrl: './user-server-rights.component.html',
  styleUrl: './user-server-rights.component.scss'
})
export class UserServerRightsComponent extends BaseComponent {

  userServerRightsService = inject(UserServerRightsService)

  availablePermissions!: any[];
  selectedUserName!: string;
  userPermission: UserServerPermission;

  constructor() {
    super();

    this.userPermission = new UserServerPermission();
    this.mapToPermissionArray(this.userPermission);
  }

  onUserChange(userName:string){
    this.selectedUserName = userName;
    this.getServerRights();
  }

  getServerRights() {
    this.userServerRightsService.getServerRights(this.selectedUserName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.mapToPermissionArray(response);
      });
  }

  onSaveBtnClick() {
    this.mapToPermissionObject();
    this.userServerRightsService.updateServerRights(this.selectedUserName, this.userPermission)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {

      });
  }

  mapToPermissionObject() {
    this.availablePermissions.forEach((x) => {
      switch (x.permission as UserServerPermissionEnum) {
        case UserServerPermissionEnum.CLIENT_REGISTRATION:
          this.userPermission.ClientRegistration = x.checked;
          break;
        case UserServerPermissionEnum.BATCH_DETAILS:
          this.userPermission.BatchDetail = x.checked;
          break;
        case UserServerPermissionEnum.AUDIT_REPORT:
          this.userPermission.AuditReport = x.checked;
          break;
        case UserServerPermissionEnum.PRODUCTION_REPORT:
          this.userPermission.ProductionReport = x.checked;
          break;
        case UserServerPermissionEnum.SYSTEM_SETTINGS:
          this.userPermission.SystemSettings = x.checked;
          break;
        case UserServerPermissionEnum.SERVER_SETTINGS:
          this.userPermission.ServerSettings = x.checked;
          break;
        case UserServerPermissionEnum.USER_MANAGEMENT:
          this.userPermission.UserManagement = x.checked;
          break;
        case UserServerPermissionEnum.THIRDPARTY_SETTINGS:
          this.userPermission.ThirdPartySettings = x.checked;
          break;
        case UserServerPermissionEnum.HELP:
          this.userPermission.Help = x.checked;
          break;
      }
    });
  }

  mapToPermissionArray(userPermission: UserServerPermission) {
    this.availablePermissions = [
      { checked: userPermission.ClientRegistration, permission: UserServerPermissionEnum.CLIENT_REGISTRATION },
      { checked: userPermission.BatchDetail, permission: UserServerPermissionEnum.BATCH_DETAILS },
      { checked: userPermission.AuditReport, permission: UserServerPermissionEnum.AUDIT_REPORT },
      { checked: userPermission.ProductionReport, permission: UserServerPermissionEnum.PRODUCTION_REPORT },
      { checked: userPermission.SystemSettings, permission: UserServerPermissionEnum.SYSTEM_SETTINGS },
      { checked: userPermission.ServerSettings, permission: UserServerPermissionEnum.SERVER_SETTINGS },
      { checked: userPermission.UserManagement, permission: UserServerPermissionEnum.USER_MANAGEMENT },
      { checked: userPermission.ThirdPartySettings, permission: UserServerPermissionEnum.THIRDPARTY_SETTINGS },
      { checked: userPermission.Help, permission: UserServerPermissionEnum.HELP },
    ];
  }
}
