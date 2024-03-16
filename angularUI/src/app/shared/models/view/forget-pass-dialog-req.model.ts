import { User } from "../entities/user/user.model";

export class ForgetPassDialogReq{
    otp!: string;
    newPassword!: string;
    confirmPassword!: string;
    user!: User;
    callBackFunc: any;

    public constructor(init?: Partial<ForgetPassDialogReq>) {
        Object.assign(this, init);
    }
}