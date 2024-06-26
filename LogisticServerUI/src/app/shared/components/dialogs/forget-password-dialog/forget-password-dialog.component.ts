import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from '../../elements/password/password.component';
import { TextComponent } from '../../elements/text/text.component';
import { ForgetPassDialogService } from './forget-password-dialog.service';
import { User } from '../../../models/entities/user/user.model';
import { UserAccountService } from '../../../../auth-pages/layout/user-management/user-account/user-account.service';
import { ForgetPassDialogReq } from '../../../models/view/forget-pass-dialog-req.model';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../../core/services/alert.service';
import { VerifyOtpReq } from '../../../models/entities/user/verify-otp-req.model';
import { takeUntil } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-forget-password-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PasswordComponent,
    TextComponent
  ],
  templateUrl: './forget-password-dialog.component.html',
  styleUrl: './forget-password-dialog.component.scss'
})
export class ForgetPasswordDialogComponent extends BaseComponent implements OnInit {
  forgetPassDialogService = inject(ForgetPassDialogService);
  userAccountService = inject(UserAccountService);
  alertService = inject(AlertService);
  forgetPassReq: ForgetPassDialogReq;
  isOtpGenerated: boolean = false;
  hasUserName: boolean = false;

  constructor(){
    super();
    this.forgetPassReq = new ForgetPassDialogReq();
  }
  
  ngOnInit(): void {
    this.forgetPassDialogService.dialog.subscribe((forgetPassDialogReq: ForgetPassDialogReq)=>{
      this.forgetPassReq = forgetPassDialogReq;
      this.hasUserName = this.forgetPassReq.userName != '' && this.forgetPassReq.userName != undefined
      this.showModelDialog();
      this.isOtpGenerated = false;
    });
  }

  showModelDialog() {
    $(`#forget-password-modal`).modal('show');
  }

  hideModal() {
    $('#forget-password-modal').modal('hide');
    this.resetModal();
  }

  resetModal() {
    this.forgetPassReq = new ForgetPassDialogReq();
  }

  onSubmitClick(){

    if(this.isOtpGenerated){
      if(this.forgetPassReq.newPassword != this.forgetPassReq.confirmPassword){
        this.alertService.error("New password and confirm password should be same.");
        return;
      }
      //Send forget password api request
      var verifyOtpReq: VerifyOtpReq = {
        UserName: this.forgetPassReq.userName,
        OTP: this.forgetPassReq.otp,
        NewPassword: this.forgetPassReq.newPassword
      };

      this.userAccountService.verifyOTP(verifyOtpReq, this.forgetPassReq.token)
      .pipe(takeUntil(this.destroy$))
      .subscribe(()=>{
        this.hideModal();
        this.forgetPassReq.callBackFunc();
      });
      
    }
    else{
      this.userAccountService.generateOTP(this.forgetPassReq.userName, this.forgetPassReq.token)
      .pipe(takeUntil(this.destroy$))
      .subscribe(()=>{
        this.isOtpGenerated = true;
      });
    }
  }
}
