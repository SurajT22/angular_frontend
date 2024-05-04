import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { User } from '../../../../../../shared/models/entities/user/user.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { UserRoleTypeEnum } from '../../../../../../shared/models/entities/user/enums/user-role-type.enum';
import { StatusEnum } from '../../../../../../shared/models/common/enums/status.enum';
import { PasswordComponent } from '../../../../../../shared/components/elements/password/password.component';
import { UserAccountService } from '../../user-account.service';
import { EmailComponent } from '../../../../../../shared/components/elements/email/email.component';
import { AlertService } from '../../../../../../core/services/alert.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-account-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent,
    PasswordComponent,
    EmailComponent
  ],
  templateUrl: './user-account-form.component.html',
  styleUrl: './user-account-form.component.scss'
})
export class UserAccountFormComponent extends BaseComponent {
  activatedRoute = inject(ActivatedRoute);
  userAccountService = inject(UserAccountService);
  alertService = inject(AlertService);

  @Input() user: User;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<User | null> = new EventEmitter();
  @Output() btnChangePassClick: EventEmitter<User | null> = new EventEmitter();
  @Output() btnForgetPassClick: EventEmitter<User | null> = new EventEmitter();

  userTypeList = [
    {lable:"Admin",value:UserRoleTypeEnum.ADMIN},
    {lable:"Supervisor",value:UserRoleTypeEnum.SUPERVISOR},
    {lable:"Operator",value:UserRoleTypeEnum.OPERATOR},
    {lable:"QA",value:UserRoleTypeEnum.QA},
    {lable:"Production",value:UserRoleTypeEnum.PRODUCTION}
  ];
  userStatusList = [
    {lable:"Active",value:StatusEnum.ACTIVE},
    {lable:"Not Active",value:StatusEnum.INACTIVE},
  ];
  confirmPassword!: string;

  constructor() {
    super();
    this.user = new User();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const userName = this.activatedRoute.snapshot.paramMap.get('id') || '';
      this.getUserByName(userName);
    }
    else{
      this.user.UserType = UserRoleTypeEnum.ADMIN;
      this.user.UserStatus = StatusEnum.ACTIVE;
    }
  }

  getUserByName(userName: string){
    this.userAccountService.getUser(userName)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res)=>{
      this.user = res;
    });
  }

  onBtnClick(): void {
    if(!this.isUpdate){
      if (this.user.Password != this.confirmPassword){
        var msg = "Confirm password should be same as password.";
        this.alertService.error(msg);
        throw Error(msg);
      }
    }
    this.btnClick.emit(this.user);
  }

  onChangePassword():void{
    this.btnChangePassClick.emit(this.user);
  }

  onForgetPassword():void{
    this.btnForgetPassClick.emit(this.user);
  }
}
