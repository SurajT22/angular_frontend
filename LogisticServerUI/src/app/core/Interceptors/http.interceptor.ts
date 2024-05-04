/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token && !req.headers.has('Authorization')) {
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }
  req = req.clone({
    headers: req.headers.set('Accept', 'application/json'),
  });

  return next(req).pipe(
    map((event: HttpEvent<any>) => {
      return event;
    }),
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      switch (error.status) {
        case 400:
          if (error.error?.errors) {
            const validationErrorDictionary = JSON.parse(
              JSON.stringify(error.error.errors),
            );
            for (const fieldName in validationErrorDictionary) {
              if (
                Object.prototype.hasOwnProperty.call(
                  validationErrorDictionary,
                  fieldName,
                )
              ) {
                //errors.push(validationErrorDictionary[fieldName] + '<br/>');
                errorMsg += validationErrorDictionary[fieldName] + ', ';
              }
            }
            errorMsg = errorMsg.slice(0, -2);
          } else {
            errorMsg = error.error?.StatusMessage;
          }
          break;
        case 401:
          errorMsg = 'Authorization Failed';
          break;
        case 403:
          errorMsg = 'User access denied';
          break;
        case 500:
          errorMsg = 'Internal Server Error';
          break;
        default:
          errorMsg = 'Unable to connect to the server';
          break;
      }
      authService.loaderService.hide();
      authService.alertService.error(errorMsg);
      return throwError(() => errorMsg);
    }),
  );
};
