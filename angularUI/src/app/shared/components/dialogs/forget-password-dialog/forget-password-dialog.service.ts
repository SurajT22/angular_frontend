/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../../models/entities/user/user.model';
import { ForgetPassDialogReq } from '../../../models/view/forget-pass-dialog-req.model';

@Injectable({
  providedIn: 'root',
})
export class ForgetPassDialogService {
  public dialog: Subject<ForgetPassDialogReq> =
    new Subject<ForgetPassDialogReq>();

  show(onForgetPassword: any, user: User) {
    this.dialog.next(
      new ForgetPassDialogReq({
        user: user,
        callBackFunc: onForgetPassword
      })
    );
  }
}
