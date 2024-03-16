import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { UserRightsComponent } from '../component/user-rights/user-rights.component';
import { UserServerPermissionEnum } from '../../../../shared/models/entities/user/enums/user-server-permission.enum';
import { UserServerRightsService } from './user-server-rights.service';
import { UserServerPermission } from '../../../../shared/models/entities/user/user-server-permission.model';

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

  constructor(){
    super();

    this.availablePermissions = [
      {checked:false, permission: UserServerPermissionEnum.CLIENT_REGISTRATION},
      {checked:false, permission: UserServerPermissionEnum.BATCH_DETAILS},
      {checked:false, permission: UserServerPermissionEnum.AUDIT_REPORT},
      {checked:false, permission: UserServerPermissionEnum.PRODUCTION_REPORT},
      {checked:false, permission: UserServerPermissionEnum.SYSTEM_SETTINGS},
      {checked:false, permission: UserServerPermissionEnum.SERVER_SETTINGS},
      {checked:false, permission: UserServerPermissionEnum.USER_MANAGEMENT},
      {checked:false, permission: UserServerPermissionEnum.THIRDPARTY_SETTINGS},
    ];
  }

  getServerRights(){
    this.userServerRightsService.getServerRights(this.selectedUserName)
    .subscribe((response)=>{

    });
  }

  onSaveBtnClick(){
    var userPermission: UserServerPermission = new UserServerPermission;

    this.userServerRightsService.updateServerRights(this.selectedUserName, userPermission);
  }

  mapToPermissionObject(){
    var userPermission
  }

  mapToPermissionArray(){

  }
}
