/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChangePassDialogReq } from '../../../models/view/change-pass-dialog-req.model';
import { User } from '../../../models/entities/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class ChangePassDialogService {
  public dialog: Subject<ChangePassDialogReq> =
    new Subject<ChangePassDialogReq>();

  show(onChangePassword: any, userName: string, token = '') {
    this.dialog.next(
      new ChangePassDialogReq({
        userName: userName,
        callBackFunc: onChangePassword,
        token: token
      })
    );
  }
}
