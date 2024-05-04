/* eslint-disable @typescript-eslint/no-explicit-any */
export class ConfirmDialogBox {
  header!: string;
  description!: string;
  callBackFunction: any;
  okBtnText!: string;
  cancelBtnText!: string;
  public constructor(init?: Partial<ConfirmDialogBox>) {
    Object.assign(this, init);
  }
}
