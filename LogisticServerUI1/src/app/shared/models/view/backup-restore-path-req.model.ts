export class BackupRestorePathReq {
    backUpPath !: string;
    restorePath !: string;
    callBackFunc: any;

    public constructor(init?: Partial<BackupRestorePathReq>) {
        Object.assign(this, init);
    }
}