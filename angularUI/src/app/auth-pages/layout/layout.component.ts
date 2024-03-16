import { Component, OnInit, inject } from '@angular/core';
import { NameFirstCharsPipe } from '../../shared/pipes/name-first-chars.pipe';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConfirmDialogboxComponent } from '../../shared/components/dialogs/confirm-dialogbox/confirm-dialogbox.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FullNamePipe } from '../../shared/pipes/full-name.pipe';
import { ProfileOrNamePipe } from '../../shared/pipes/profile-or-name.pipe';
import { BaseComponent } from '../../shared/components/base/base.component';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../shared/models/entities/user/user.model';
import { LAYOUT_NAVBAR } from './layout.navbar';
import { AuthenticateDialogComponent } from '../../shared/components/dialogs/authenticate-dialog/authenticate-dialog.component';
import { ChangePasswordDialogComponent } from '../../shared/components/dialogs/change-password-dialog/change-password-dialog.component';
import { ForgetPasswordDialogComponent } from '../../shared/components/dialogs/forget-password-dialog/forget-password-dialog.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [NameFirstCharsPipe],
  imports: [
    RouterOutlet,
    NavBarComponent,
    ProfileOrNamePipe,
    FullNamePipe,
    RouterModule,
    ConfirmDialogboxComponent,
    AuthenticateDialogComponent,
    ChangePasswordDialogComponent,
    ForgetPasswordDialogComponent
  ],
})
export class LayoutComponent extends BaseComponent implements OnInit {
  authService = inject(AuthService);
  // userService = inject(UserService);
  // changePasswordDialogService = inject(ChangePasswordDialogService);

  navbarItems = LAYOUT_NAVBAR;
  user!: User | null;

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.userProfileChange.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

  openChangePasswordDialog() {
    // this.changePasswordDialogService.show((updatePasswordReq: any) => {
    //   this.updatePasswordAsync(updatePasswordReq);
    // });
  }

  // updatePasswordAsync(updatePasswordReq: UpdatePasswordReq) {
  //   this.userService
  //     .updatePasswordAsync(updatePasswordReq)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(() => {});
  // }
}
