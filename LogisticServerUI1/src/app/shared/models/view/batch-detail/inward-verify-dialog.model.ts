import { InwardVerifyFileRes } from "../../entities/batch-detail/inward-verify-file-res.model";

export class InwardVerifyDialog {
    callBackFunction: any;
    verifyData!: InwardVerifyFileRes;

    public constructor(init?: Partial<InwardVerifyDialog>) {
        Object.assign(this, init);
    }
}