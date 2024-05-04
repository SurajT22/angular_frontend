/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from '../../elements/password/password.component';
import { UserAuthenticateReq } from '../../../models/view/user-authenticate-req.model';
import { BaseComponent } from '../../base/base.component';
import { TextComponent } from '../../elements/text/text.component';
import { AuthService } from '../../../../core/services/auth.service';
import { takeUntil } from 'rxjs';
import { AuthenticateDialogService } from './authenticate-dialog.service';
import { User } from '../../../models/entities/user/user.model';
import { ApiAuthService } from '../../../apis/api-auth.service';
declare let $: any;

@Component({
  selector: 'app-authenticate-dialog',
  standalone: true,
  templateUrl: './authenticate-dialog.component.html',
  styleUrl: './authenticate-dialog.component.scss',
  imports: [FormsModule, PasswordComponent, TextComponent],
})
export class AuthenticateDialogComponent
  extends BaseComponent
  implements OnInit
{
  authService = inject(AuthService);
  apiAuthService = inject(ApiAuthService);
  authenticateDialogService = inject(AuthenticateDialogService);

  onAuthenticationBtnClick!: any;
  user!: User | null;
  userAuthenticateReq!: UserAuthenticateReq;

  constructor() {
    super();
    this.userAuthenticateReq = new UserAuthenticateReq();
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authenticateDialogService.dialog.subscribe(
      (onAuthenticationBtnClick: UserAuthenticateReq) => {
        if (this.user) this.userAuthenticateReq.UserName = this.user?.UserName;
        this.onAuthenticationBtnClick = onAuthenticationBtnClick;
        this.showModelDialog();
      },
    );
  }

  onAuthenticate() {
    this.apiAuthService
      .authenticateAsync(this.userAuthenticateReq)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.hideModal();
        setTimeout(() => {
          this.onAuthenticationBtnClick();
        }, 500);
      });
  }

  showModelDialog() {
    $(`#authorization-modal`).modal('show');
  }

  hideModal() {
    $('#authorization-modal').modal('hide');
    this.resetModal();
  }

  resetModal() {
    this.userAuthenticateReq = new UserAuthenticateReq();
  }
}
