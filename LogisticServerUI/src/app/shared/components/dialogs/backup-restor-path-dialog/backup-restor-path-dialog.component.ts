import { Component,  ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { TextComponent } from '../../elements/text/text.component';
import { FormsModule } from '@angular/forms';
import { BackupRestorePathDilogService } from './backup-restor-path-dialog.service';
import { BackupRestorePathReq } from '../../../models/view/backup-restore-path-req.model';
declare let $: any;

@Component({
  selector: 'app-backup-restor-path-dialog',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent
  ],
  templateUrl: './backup-restor-path-dialog.component.html',
  styleUrl: './backup-restor-path-dialog.component.scss'
})

export class BackupRestorPathDialogComponent extends BaseComponent implements OnInit {
  backupRestorePathDilogService = inject(BackupRestorePathDilogService);
  backupRestorePathReq: BackupRestorePathReq;
  @ViewChild('folderPathInput') folderPathInput!: ElementRef<HTMLInputElement>;
  @ViewChild('folderInput') folderInput!: ElementRef<HTMLInputElement>;
  selectedFolderPath: string = '';


  constructor() {
    super();
    this.backupRestorePathReq = new BackupRestorePathReq();
  }
  ngOnInit(): void {
    this.backupRestorePathDilogService.dialog.subscribe((backupRestorePathReq: BackupRestorePathReq) => {
      this.backupRestorePathReq = backupRestorePathReq;
      this.showModelDialog();
    })
  }
  showModelDialog() {
    $(`#backup-restore-modal`).modal('show');
  }
  hideModal() {
    $('#backup-restore-modal').modal('hide');
    this.resetModal();
  }
  resetModal() {
    this.backupRestorePathReq = new BackupRestorePathReq();
  }
  onSubmitClick() {

    this.hideModal();
    this.backupRestorePathReq.callBackFunc(this.backupRestorePathReq);
  }
  
 

  

  onFolderSelected(event: any) {
    const folderPath = event.target.files[0].webkitRelativePath.split('/')[0];
    this.selectedFolderPath = folderPath;
  }
  

}
