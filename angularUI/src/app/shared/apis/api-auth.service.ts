/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, inject } from '@angular/core';
import { ApiHttpService } from '../../core/services/api-http.service';
import { UserAuthenticateReq } from '../models/view/user-authenticate-req.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../open-pages/login/models/login-res.model';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  api = inject(ApiHttpService);
  private readonly baseUrl = 'v1/auth';

  //#region POST
  login(userAuthenticateReq: UserAuthenticateReq): Observable<LoginResponse> {
    return this.api.post(`${this.baseUrl}/login`, userAuthenticateReq);
  }

  authenticateAsync(
    userAuthenticateReq: UserAuthenticateReq,
  ): Observable<boolean> {
    return this.api.post(`${this.baseUrl}/user`, userAuthenticateReq);
  }
  //#endregion

  //#region GET
  logOut(): Observable<boolean> {
    return this.api.get(`${this.baseUrl}/logout`);
  }
  //#endregion
}
