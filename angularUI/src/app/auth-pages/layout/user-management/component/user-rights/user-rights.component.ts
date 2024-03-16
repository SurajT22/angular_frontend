import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { User } from '../../../../../shared/models/entities/user/user.model';
import { StatusEnum } from '../../../../../shared/models/common/enums/status.enum';
import { UserRoleTypeEnum } from '../../../../../shared/models/entities/user/enums/user-role-type.enum';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { FormsModule } from '@angular/forms';
import { UserServerPermissionEnum } from '../../../../../shared/models/entities/user/enums/user-server-permission.enum';
import { UserServerPermissionEnumPipe } from '../../../../../shared/pipes/user-server-permission-enum.pipe';
import { CheckboxComponent } from '../../../../../shared/components/elements/checkbox/checkbox.component';
import { FormBtnPrComponent } from '../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { UserClientPermissionEnum } from '../../../../../shared/models/entities/user/enums/user-client-permission.enum';
import { UserClientPermissionEnumPipe } from '../../../../../shared/pipes/user-client-permission-enum.pipe';
import { UserAccountService } from '../../user-account/user-account.service';

@Component({
  selector: 'app-user-rights',
  standalone: true,
  imports: [
    FormsModule,
    PageHeaderComponent,
    NgSelectComponent,
    CheckboxComponent,
    FormBtnPrComponent
  ],
  providers:[
    UserServerPermissionEnumPipe,
    UserClientPermissionEnumPipe
  ],
  templateUrl: './user-rights.component.html',
  styleUrl: './user-rights.component.scss'
})
export class UserRightsComponent extends BaseComponent implements OnInit {

  @Input() headerLable!: string;
  @Input() isServerRights: boolean = true;
  @Input() selectedUserName!: string;
  @Output() selectedUserNameChange = new EventEmitter<string>();
  @Input() availablePermissions!: UserPermissionCheck[];
  @Output() btnClick: EventEmitter<void> = new EventEmitter();

  userServerPermissionEnumPipe = inject(UserServerPermissionEnumPipe);
  userClientPermissionEnumPipe = inject(UserClientPermissionEnumPipe);
  userAccountService = inject(UserAccountService);

  userList!: User[];

  constructor(){
    super();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userAccountService.getAllUsers()
    .subscribe((response)=> {
      this.userList = response
    });
  }

  transformPermission(permission: UserClientPermissionEnum | UserServerPermissionEnum): string{
    if(this.isServerRights){
      return this.userServerPermissionEnumPipe.transform(permission as UserServerPermissionEnum);
    }
    else{
      return this.userClientPermissionEnumPipe.transform(permission as UserClientPermissionEnum);
    }
  }

  onSaveBtnClick(){
    this.btnClick.emit();
  }

}

class UserPermissionCheck {
  checked!: boolean;
  permission!: UserServerPermissionEnum | UserClientPermissionEnum;
}
