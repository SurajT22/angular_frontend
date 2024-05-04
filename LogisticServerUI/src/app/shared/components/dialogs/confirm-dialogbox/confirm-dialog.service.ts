/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmDialogBox } from '../../../models/view/confirm-dialogbox.model';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  public confirmDialog: Subject<ConfirmDialogBox> =
    new Subject<ConfirmDialogBox>();

  confirm(
    callBackFunc: any,
    desc: string,
    header?: string,
    okBtnText?: string,
    cancelBtnText?: string,
  ): void {
    this.confirmDialog.next(
      new ConfirmDialogBox({
        header: header,
        description: desc,
        callBackFunction: callBackFunc,
        okBtnText: okBtnText,
        cancelBtnText: cancelBtnText,
      }),
    );
  }
}
