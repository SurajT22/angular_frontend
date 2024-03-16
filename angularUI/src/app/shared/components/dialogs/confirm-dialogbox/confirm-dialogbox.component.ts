/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit, inject } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';
import { ConfirmDialogBox } from '../../../models/view/confirm-dialogbox.model';
declare let $: any;

@Component({
  selector: 'app-confirm-dialogbox',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialogbox.component.html',
  styleUrl: './confirm-dialogbox.component.scss',
})
export class ConfirmDialogboxComponent implements OnInit {
  confirmDialogboxService = inject(ConfirmDialogService);
  callBackFunc: any;
  header = 'Are you sure?';
  description!: string;
  okBtnText = 'Confirm';
  cancelBtnText = 'Cancel';

  ngOnInit(): void {
    this.confirmDialogboxService.confirmDialog.subscribe(
      (configDialogBox: ConfirmDialogBox) => {
        this.callBackFunc = configDialogBox.callBackFunction;
        this.header = configDialogBox.header
          ? configDialogBox.header
          : 'Are you sure?';
        this.description = configDialogBox.description;
        this.okBtnText = configDialogBox.okBtnText
          ? configDialogBox.okBtnText
          : 'Confirm';
        this.cancelBtnText = configDialogBox.cancelBtnText
          ? configDialogBox.cancelBtnText
          : 'Cancel';
        this.showModal();
      },
    );
  }

  showModal() {
    $('#confirm-dialogbox').modal('show');
  }

  hideModal() {
    $('#confirm-dialogbox').modal('hide');
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
