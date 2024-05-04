import { Component, OnInit, inject } from '@angular/core';
import { InwardVerifyDialogService } from './inward-verify-dialog.service';
import { InwardVerifyDialog } from '../../../../../shared/models/view/batch-detail/inward-verify-dialog.model';
import { InwardVerifyFileRes } from '../../../../../shared/models/entities/batch-detail/inward-verify-file-res.model';
declare let $: any;

@Component({
  selector: 'app-inward-verify-dialog',
  standalone: true,
  imports: [],
  templateUrl: './inward-verify-dialog.component.html',
  styleUrl: './inward-verify-dialog.component.scss'
})
export class InwardVerifyDialogComponent implements OnInit {
  inwardVerifyDialogService = inject(InwardVerifyDialogService);
  
  callBackFunc: any;
  verifyData: InwardVerifyFileRes;
  
  constructor(){
    this.verifyData = new InwardVerifyFileRes();
  }

  ngOnInit(): void {
    this.inwardVerifyDialogService.showDialog
    .subscribe((dialog:InwardVerifyDialog)=>{
      this.callBackFunc = dialog.callBackFunction;
      this.verifyData = dialog.verifyData;
      this.showModal();
    });
  }

  showModal() {
    $('#inward-verify-dialog').modal('show');
  }

  hideModal() {
    $('#inward-verify-dialog').modal('hide');
  }

  onCancelClick() {
    this.callBackFunc(false);
    this.hideModal();
  }

  onOkClick() {
    this.callBackFunc(true);
    this.hideModal();
  }
}
