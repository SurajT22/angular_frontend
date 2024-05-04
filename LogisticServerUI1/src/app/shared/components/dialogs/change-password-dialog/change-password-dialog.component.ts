import { Component, OnInit, inject } from '@angular/core';
import { ChangePassDialogReq as ChangePassDialogReq } from '../../../models/view/change-pass-dialog-req.model';
import { BaseComponent } from '../../base/base.component';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from '../../elements/password/password.component';
import { TextComponent } from '../../elements/text/text.component';
import { ChangePassDialogService } from './change-password-dialog.service';
import { User } from '../../../models/entities/user/user.model';
import { UserAccountService } from '../../../../auth-pages/layout/user-management/user-account/user-account.service';
import { ResetPasswordReq } from '../../../models/entities/user/reset-password-req.model';
import { finalize, takeUntil } from 'rxjs';
import { AlertService } from '../../../../core/services/alert.service';
declare let $: any;

@Component({
  selector: 'app-change-password-dialog',
  standalone: true,
  imports: [
    FormsModule,
    PasswordComponent,
    TextComponent
  ],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss'
})
export class ChangePasswordDialogComponent extends BaseComponent implements OnInit {
  changePassDialogService = inject(ChangePassDialogService);
  userAccountService = inject(UserAccountService);
  alertService = inject(AlertService);
  changePassReq: ChangePassDialogReq;

  constructor(){
    super();
    this.changePassReq = new ChangePassDialogReq();
  }
  
  ngOnInit(): void {
    this.changePassDialogService.dialog.subscribe((changePassDialogReq: ChangePassDialogReq)=>{
      this.changePassReq = changePassDialogReq;
      this.showModelDialog();
    });
  }

  showModelDialog() {
    $(`#change-password-modal`).modal('show');
  }

  hideModal() {
    $('#change-password-modal').modal('hide');
    this.resetModal();
  }

  resetModal() {
    this.changePassReq = new ChangePassDialogReq();
  }

  onSubmitClick(){
    if(this.changePassReq.newPassword != this.changePassReq.confirmPassword){
      this.alertService.error("New password and confirm password should be same.");
      return;
    }
    //Send change password api request

    var resetReq: ResetPasswordReq = {
      UserName : this.changePassReq.userName,
      NewPassword : this.changePassReq.newPassword,
      OldPassword : this.changePassReq.oldPassword
    }
    
    this.userAccountService.resetPassword(resetReq, this.changePassReq.token)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.changePassReq.callBackFunc();
      this.hideModal();
    });
  }
}
