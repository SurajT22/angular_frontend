/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/entities/user/user.model';
import { UserServerPermission } from '../../shared/models/entities/user/user-server-permission.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';
  private readonly USER_PERMISSIONS_KEY = 'permissions';

  private _permissions: UserServerPermission | null = null;
  private _token: string | null = null;
  private _user: User | null = null;

  // #region Token Storage Start
  getToken(): string | null {
    // Static token
    return "QWRtaW58MjUtMDItMjUgMTM6NDk6MTkNCg==";
    if (this._token) return this._token;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    this._token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken() {
    this._token = null;
    localStorage.removeItem(this.TOKEN_KEY);
  }
  // #endregion

  // #region User Storage Start
  getUser(): User | null {
    if (this._user) return this._user;
    const str = sessionStorage.getItem(this.USER_KEY);
    if (str) {
      return JSON.parse(str);
    }
    return null;
  }

  setUser(user: User) {
    if (user) {
      this._user = user;
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  removeUser() {
    this._user = null;
    sessionStorage.removeItem(this.USER_KEY);
  }
  // #endregion

  // #region User Access Modules Storage Start
  getUserPermissions(): UserServerPermission | null {
    if (this._permissions) return this._permissions;
    const str = sessionStorage.getItem(this.USER_PERMISSIONS_KEY);
    if (str) {
      const permissions: UserServerPermission = JSON.parse(str);
      this._permissions = permissions;
      return permissions;
    }
    return null;
  }

  setUserPermissions(permissions: UserServerPermission) {
    this._permissions = permissions;
    sessionStorage.setItem(
      this.USER_PERMISSIONS_KEY,
      JSON.stringify(permissions),
    );
  }

  removeUserPermissions() {
    this._permissions = null;
    sessionStorage.removeItem(this.USER_PERMISSIONS_KEY);
  }
  // #endregion
}
