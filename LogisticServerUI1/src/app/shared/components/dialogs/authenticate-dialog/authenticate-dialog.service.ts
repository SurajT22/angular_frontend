/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserAuthenticateReq } from '../../../models/view/user-authenticate-req.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateDialogService {
  public dialog: Subject<UserAuthenticateReq> =
    new Subject<UserAuthenticateReq>();

  show(onAuthenticate: any) {
    this.dialog.next(onAuthenticate);
  }
}
