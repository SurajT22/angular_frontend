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
    const user = this.getUser();
    if (user) {
      this._isSuperAdmin = true;
      //this._isSuperAdmin = user?.roleType == UserRoleTypeEnum.MASTER_ADMIN;
    }
  }

  login(response: LoginResponse): boolean {
    const routeLink = ['oee/company'];
    if (!routeLink) {
      this.alertService.error('Invalid user role found');
      return false;
    }
    this.storageService.setToken(response.token);
    this.storageService.setUser(response.user);
    // Add single user permission
    //this.storageService.setUserPermissions(response.permissions);
    // will get from login response
    this._isSuperAdmin = true;
    void this.router.navigate(routeLink, { replaceUrl: true });
    this.alertService.success(
      `Welcome back, ${response.user.FullName}`,
    );
    return true;
  }

  logout() {
    const user = this.getUser();
    // this.storageService.removeToken();
    // this.storageService.removeUser();
    // this.storageService.removeUserAccessModules();

    if (user) {
      this.apiAuthService.logOut().subscribe(() => { });
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
          return currentUserPermission?.BatchDetails;
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
}
