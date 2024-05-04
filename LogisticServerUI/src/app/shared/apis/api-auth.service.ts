/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, inject } from '@angular/core';
import { ApiHttpService } from '../../core/services/api-http.service';
import { UserAuthenticateReq } from '../models/view/user-authenticate-req.model';
import { Observable, map } from 'rxjs';
import { LoginResponse } from '../../open-pages/login/models/login-res.model';
import { HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../core/services/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  api = inject(ApiHttpService);
  private readonly baseUrl = 'KevinWebService';

  //#region POST
  login(userAuthenticateReq: UserAuthenticateReq): Observable<LoginResponse> {
    const username = AppConfigService?.appSettings?.basicAuthUsername;
    const password = AppConfigService?.appSettings?.basicAuthPass;
    return this.api.post(
      `${this.baseUrl}/webapi_GetLogin`,
      userAuthenticateReq,
      { headers: new HttpHeaders({ Authorization: 'Basic  ' + btoa(username + ':' + password) }) }
      ).pipe(map((response)=>{
          return response;
        }));
  }

  authenticateAsync(userAuthenticateReq: UserAuthenticateReq): Observable<boolean> {
    return this.api.post(`${this.baseUrl}/user`, userAuthenticateReq);
  }
  //#endregion

  //#region GET
  logOut(): Observable<boolean> {
    return this.api.get(`${this.baseUrl}/logout`);
  }
  //#endregion
}
