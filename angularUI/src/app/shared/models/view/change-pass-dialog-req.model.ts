import { User } from "../entities/user/user.model";

export class ChangePassDialogReq{
    oldPassword!: string;
    newPassword!: string;
    confirmPassword!: string;
    user!: User;
    callBackFunc: any;

    public constructor(init?: Partial<ChangePassDialogReq>) {
        Object.assign(this, init);
    }
}