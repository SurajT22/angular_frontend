import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackupRestorePathReq } from '../../../models/view/backup-restore-path-req.model';

@Injectable({
    providedIn: 'root',
})
export class BackupRestorePathDilogService{
    public dialog: Subject<BackupRestorePathReq> = new Subject<BackupRestorePathReq>();
    show(pathDialog:any){
        this.dialog.next(
            new BackupRestorePathReq({
                callBackFunc : pathDialog
            })
        );
    }
}