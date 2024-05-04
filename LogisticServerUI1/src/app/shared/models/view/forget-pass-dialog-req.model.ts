import { User } from "../entities/user/user.model";

export class ForgetPassDialogReq{
    otp!: string;
    newPassword!: string;
    confirmPassword!: string;
    userName: string = '';
    callBackFunc: any;
    token = '';

    public constructor(init?: Partial<ForgetPassDialogReq>) {
        Object.assign(this, init);
    }
}