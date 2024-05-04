/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, inject } from '@angular/core';
import { UserAuthenticateReq } from '../../shared/models/view/user-authenticate-req.model';
import { Observable, map } from 'rxjs';
import { LoaderService } from '../../core/services/loader.service';
import { ApiAuthService } from '../../shared/apis/api-auth.service';
import { LoginResponse } from './models/login-res.model';
import { AlertService } from '../../core/services/alert.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiAuthService = inject(ApiAuthService);
  //apiUserService = inject(ApiUserService);
  alertService = inject(AlertService);
  loaderService = inject(LoaderService);

  //#region POST
  login(userAuthenticateReq: UserAuthenticateReq): Observable<LoginResponse> {
    this.loaderService.show();
    return this.apiAuthService.login(userAuthenticateReq).pipe(
      map((response) => {
        return response;
      }),
    );
  }
  //#endregion

  //#region Put
  // updatePasswordAsync(
  //   updatePasswordReq: UpdatePasswordReq,
  //   token: string,
  // ): Observable<void> {
  //   this.loaderService.show();
  //   return this.apiUserService
  //     .updatePasswordAsync(updatePasswordReq, token)
  //     .pipe(
  //       map((response) => {
  //         this.alertService.success('User password successfully updated');
  //         return response;
  //       }),
  //     );
  // }
  //#endregion
}
