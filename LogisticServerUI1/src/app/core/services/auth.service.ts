import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { AlertService } from './alert.service';
import { LoaderService } from './loader.service';
import { User } from '../../shared/models/entities/user/user.model';
import { UserServerPermissionEnum } from '../../shared/models/entities/user/enums/user-server-permission.enum';
import { Router } from '@angular/router';
import { ApiAuthService } from '../../shared/apis/api-auth.service';
import { Subject } from 'rxjs';
import { LoginResponse } from '../../open-pages/login/models/login-res.model';
import { UserRoleTypeEnum } from '../../shared/models/entities/user/enums/user-role-type.enum';
import { UserServerPermission } from '../../shared/models/entities/user/user-server-permission.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storageService = inject(StorageService);
  alertService = inject(AlertService);
  loaderService = inject(LoaderService);
  apiAuthService = inject(ApiAuthService);
  router = inject(Router);
  public userProfileChange: Subject<User> = new Subject<User>();

  private _isSuperAdmin: boolean = false;
  get IsSuperAdmin(): boolean {
    return this._isSuperAdmin;
  }

  constructor() {
    
  }

  login(response: LoginResponse): boolean {
    const routeLink = [''];
    if (!routeLink) {
      this.alertService.error('Invalid user role found');
      return false;
    }
    this.storageService.setToken(response.TokenID);
    this.storageService.setUser(response.UserDetails);

    // Set auto logout time based on token expire and auto logout duration.
    var autoLogoutSeconds = parseInt(response.AutoLogoutDuration);
    var logoutSeconds = this.getTokenExpireSeconds(new Date(response.TokenExpiry));
    if(response.AutoLogout && logoutSeconds > autoLogoutSeconds){
      logoutSeconds = autoLogoutSeconds;
    }

    this.storageService.setScreenTimeOut(logoutSeconds);
    // Add single user permission
    this.storageService.setUserPermissions(response.ServerRights);
    // will get from login response
    this._isSuperAdmin = response.Master;
    void this.router.navigate(routeLink, { replaceUrl: true });
    this.alertService.success(
      `Welcome back, ${response.UserDetails.FullName}`,
    );
    return true;
  }

  logout() {
    const user = this.getUser();
    this.storageService.removeToken();
    this.storageService.removeUser();
    this.storageService.removeUserPermissions();
    this.storageService.removeScreenTimeOut();
    //this.storageService.removeUserAccessModules();

    if (user) {
      //this.apiAuthService.logOut().subscribe(() => { });
    }
    void this.router.navigate(['login']);
  }

  // #region Storage Methods Start
  getToken(): string | null {
    return this.storageService.getToken();
  }

  getUser(): User | null {
    return this.storageService.getUser();
  }

  getUserPermissions(): UserServerPermission | null {
    return this.storageService.getUserPermissions();
  }

  getScreenTimeOut(): number | null {
    return this.storageService.getScreenTimeOut();
  }

  getUserRoleType(): UserRoleTypeEnum {
    const user = this.getUser();
    return user ? user.UserType : UserRoleTypeEnum.ADMIN;
  }
  // #endregion

  isAuthenticated(): boolean {
    // If token available then it is authenticated
    // In future can be checked token is expired or not
    return this.storageService.getToken() ? true : false;
  }

  hasPermission(permissionType: UserServerPermissionEnum): boolean {
    const permissionFun = (permissionType: UserServerPermissionEnum) => {
      var currentUserPermission = this.storageService.getUserPermissions();
      switch (permissionType) {
        case UserServerPermissionEnum.CLIENT_REGISTRATION:
          return currentUserPermission?.ClientRegistration;
        case UserServerPermissionEnum.BATCH_DETAILS:
          return currentUserPermission?.BatchDetail;
        case UserServerPermissionEnum.AUDIT_REPORT:
          return currentUserPermission?.AuditReport;
        case UserServerPermissionEnum.PRODUCTION_REPORT:
          return currentUserPermission?.ProductionReport;
        case UserServerPermissionEnum.SYSTEM_SETTINGS:
          return currentUserPermission?.SystemSettings;
        case UserServerPermissionEnum.SERVER_SETTINGS:
          return currentUserPermission?.ServerSettings;
        case UserServerPermissionEnum.USER_MANAGEMENT:
          return currentUserPermission?.UserManagement;
        case UserServerPermissionEnum.THIRDPARTY_SETTINGS:
          return currentUserPermission?.ThirdPartySettings;
        case UserServerPermissionEnum.HELP:
          return currentUserPermission?.Help;
        default:
          return true;
      }
    }
    return this._isSuperAdmin || permissionFun(permissionType) === true;
  }

  setUser(user: User) {
    user && this.userProfileChange.next(user);
    return this.storageService.setUser(user);
  }

  private getTokenExpireSeconds(tokenExpDate: Date):number{
    const now = new Date();
    const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    var diffSeconds = (tokenExpDate.getTime() - utcNow.getTime()) / 1000;

    return diffSeconds;
  }
}
