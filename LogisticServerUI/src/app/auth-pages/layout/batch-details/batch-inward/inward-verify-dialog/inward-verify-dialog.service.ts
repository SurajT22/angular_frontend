import { Injectable } from "@angular/core";
import { InwardVerifyDialog } from "../../../../../shared/models/view/batch-detail/inward-verify-dialog.model";
import { Subject } from "rxjs";
import { InwardVerifyFileRes } from "../../../../../shared/models/entities/batch-detail/inward-verify-file-res.model";

@Injectable({
    providedIn: 'root',
})
export class InwardVerifyDialogService {
    public showDialog: Subject<InwardVerifyDialog> = new Subject<InwardVerifyDialog>();

    show(callBackFunc: any, verifyData: InwardVerifyFileRes): void {
        this.showDialog.next(
            new InwardVerifyDialog({
                callBackFunction: callBackFunc,
                verifyData: verifyData
            }),
        );
    }
}