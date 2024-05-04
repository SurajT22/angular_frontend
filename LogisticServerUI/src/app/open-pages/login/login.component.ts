/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { finalize, takeUntil } from 'rxjs';
import { UserAuthenticateReq } from '../../shared/models/view/user-authenticate-req.model';
import { LoginService } from './login.service';
import { LoginResponse } from './models/login-res.model';
import { AlertService } from '../../core/services/alert.service';
import { ChangePassDialogService } from '../../shared/components/dialogs/change-password-dialog/change-password-dialog.service';
import { ForgetPassDialogService } from '../../shared/components/dialogs/forget-password-dialog/forget-password-dialog.service';
import { ChangePasswordDialogComponent } from '../../shared/components/dialogs/change-password-dialog/change-password-dialog.component';
import { ForgetPasswordDialogComponent } from '../../shared/components/dialogs/forget-password-dialog/forget-password-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    ChangePasswordDialogComponent,
    ForgetPasswordDialogComponent
  ],
})
export class LoginComponent extends BaseComponent {
  alertService = inject(AlertService);
  changePassDialogService = inject(ChangePassDialogService);
  forgetPassDialogService = inject(ForgetPassDialogService);
  signInForm!: UntypedFormGroup;
  isForgotPwdView = false;
  isPwdShow = false;
  pwdResetForm!: UntypedFormGroup;
  userAuthenticateReq!: UserAuthenticateReq;
  loginService = inject(LoginService);
  authService = inject(AuthService);
  formBuilder = inject(UntypedFormBuilder);
  authToken!: string;

  constructor() {
    super();
    this.userAuthenticateReq = new UserAuthenticateReq();

    this.signInForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      pwd: ['', Validators.compose([Validators.required])],
    });

    this.pwdResetForm = this.formBuilder.group({
      emailId: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }

  //#region Post
  login(): void {
    this.loaderService?.show();
    this.userAuthenticateReq.UserName =
      this.signInForm.controls['username'].value;
    this.userAuthenticateReq.Password = this.signInForm.controls['pwd'].value;
    this.loginService
      .login(this.userAuthenticateReq)
      .pipe(
        finalize(() => {
          takeUntil(this.destroy$);
          this.loaderService?.hide();
        }),
      )
      .subscribe((response: LoginResponse) => {
        if (!response.FirstLogin)
          this.authService.login(response);
        else {
          this.authToken = response.TokenID;
          this.showChangeUserPwdModal(response.UserDetails.UserName);
        }
      });
  }

  showChangeUserPwdModal(userName: string){
    if(userName){
      this.changePassDialogService.show(()=>{

      }, userName, this.authToken);
    }
  }

  showForgetPwdModal(){
    this.forgetPassDialogService.show(()=>{

    }, this.authToken);
  }

  // updatePasswordAsync(updatePasswordReq: UpdatePasswordReq) {
  //   this.loginService
  //     .updatePasswordAsync(updatePasswordReq, this.authToken)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(() => {});
  // }

  // sendPwdResetReq(): void {
  //   this.resetPasswordReq.newPassword =
  //     this.pwdResetForm.controls['emailId'].value;
  //   // this.resetPasswordReq.userId = this.authService.userDetails?._id;
  //   this.loaderService?.show();
  //   this.userService
  //     .resetPasswordAsync(this.resetPasswordReq)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((res: ResetPasswordReq) => {
  //       // this.alertService.success(res);
  //     });
  // }
  //#endregion

  //#region Non-action Methods
  // changeView(forgotPwdView: boolean) {
  //   this.isForgotPwdView = forgotPwdView;
  // }
  //#endregion
}
