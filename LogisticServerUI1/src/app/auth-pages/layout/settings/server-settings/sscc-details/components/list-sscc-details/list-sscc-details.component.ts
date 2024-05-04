import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../../../shared/components/page/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { SsccStatusHtmlPipe } from '../../pipe/sscc-details-status.pipe';
import { ConfirmDialogService } from '../../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { Sscc } from '../../../../../../../shared/models/entities/server-settings/sscc.model';
import { FormBtnPrComponent } from "../../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { SsccDetailsService } from '../../sscc-details.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-sscc-details',
  standalone: true,
  templateUrl: './list-sscc-details.component.html',
  styleUrl: './list-sscc-details.component.scss',
  imports: [
    RouterModule,
    PageHeaderComponent,
    SsccStatusHtmlPipe,
    FormBtnPrComponent
  ]
})
export class ListSsccDetailsComponent extends BaseComponent implements OnInit {

  confirmDialogService = inject(ConfirmDialogService);
  ssccDetailsService = inject(SsccDetailsService);

  ssccList!: Sscc[];


  onSaveBtnClick: any;

  ngOnInit(): void {
    this.getAllSscc();
  }

  getAllSscc() {
    this.ssccDetailsService.getAllSscc()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.ssccList = response;
      })
  }

  getAllRegulatoryDetails() {
    this.ssccDetailsService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        return response;
      })
  }



}
