import { Component, OnDestroy, OnInit, inject } from '@angular/core';
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
import { AutoLogoutService } from '../../core/services/auto-logout.service';
import { DatePipe } from '@angular/common';
import { RoleTypePipe } from '../../shared/pipes/role-type.pipe';
import { ChangePassDialogService } from '../../shared/components/dialogs/change-password-dialog/change-password-dialog.service';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    providers: [
        NameFirstCharsPipe,
        DatePipe,
        RoleTypePipe
    ],
    imports: [
        RouterOutlet,
        NavBarComponent,
        ProfileOrNamePipe,
        FullNamePipe,
        RouterModule,
        ConfirmDialogboxComponent,
        AuthenticateDialogComponent,
        ChangePasswordDialogComponent,
        ForgetPasswordDialogComponent,
        RoleTypePipe,
        DashboardComponent
    ]
})
export class LayoutComponent extends BaseComponent implements OnInit {
  authService = inject(AuthService);
  autoLogoutServices = inject(AutoLogoutService);
  datePipe = inject(DatePipe);
  // userService = inject(UserService);
  changePassDialogService = inject(ChangePassDialogService);

  navbarItems = LAYOUT_NAVBAR;
  user!: User | null;
  private _watchTimer: any;
  now!: string;
  
  constructor(){
    super();
    this._watchTimer = setInterval(() => {
      this.now = this.datePipe.transform(new Date(), "YYYY-MM-dd HH:mm:ss") as string;
    }, 1);;
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.userProfileChange.subscribe((user) => {
      this.user = user;
    });

    this.autoLogoutServices.startListener();
    this.autoLogoutServices.hideModalOnLogout.subscribe((val: boolean)=>{
      if(val){        
          (<any>$('.modal')).modal('hide');
          this.loaderService.hide();
      }
    })
  }

  override ngOnDestroy(): void {
    clearInterval(this._watchTimer);
    this.autoLogoutServices.endListener();
    super.ngOnDestroy();
  }

  logout() {
    this.authService.logout();
  }

  openChangePasswordDialog() {
    this.changePassDialogService.show(()=>{

    }, this.user?.UserName as string);
  }
}
