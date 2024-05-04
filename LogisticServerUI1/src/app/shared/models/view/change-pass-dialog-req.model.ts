import { User } from "../entities/user/user.model";

export class ChangePassDialogReq{
    oldPassword!: string;
    newPassword!: string;
    confirmPassword!: string;
    userName!: string;
    callBackFunc: any;
    token = '';

    public constructor(init?: Partial<ChangePassDialogReq>) {
        Object.assign(this, init);
    }
}