import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { HrfDetailFormComponent } from '../../product-list/components/hrf-detail-form/hrf-detail-form.component';
import { StationDetailFormComponent } from '../../product-list/components/station-detail-form/station-detail-form.component';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { FormFooterComponent } from "../../../../shared/components/form/form-footer/form-footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { BatchDetailsService } from '../batch-details.service';
import { EditBatchDetail } from '../../../../shared/models/entities/batch-detail/edit-batch-detail.model';
import { takeUntil } from 'rxjs';
import { EditBatchReq } from '../../../../shared/models/entities/batch-detail/edit-batch-req.model';

@Component({
    selector: 'app-edit-batch',
    standalone: true,
    templateUrl: './edit-batch.component.html',
    styleUrl: './edit-batch.component.scss',
    imports: [
        PageHeaderComponent,
        NgSelectComponent,
        FormsModule,
        StationDetailFormComponent,
        TextComponent,
        HrfDetailFormComponent,
        FormBtnPrComponent,
        FormFooterComponent
    ]
})
export class EditBatchComponent extends BaseComponent{
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  batchDetailsService = inject(BatchDetailsService);

  editBatch:EditBatchDetail;
  quantity !: string;

  constructor() {
    super();

    const batchName = this.activatedRoute.snapshot.paramMap.get('batch') || '';
    const gtin = this.activatedRoute.snapshot.paramMap.get('gtin') || '';
    const packagingLevel = this.activatedRoute.snapshot.paramMap.get('level') || '';

    this.getSelectedBatchDetail(batchName, gtin, packagingLevel);
    this.editBatch = new EditBatchDetail();
  }

  getSelectedBatchDetail(batchName: string, gtin: string, packagingLevel:string){
    this.batchDetailsService.getSelectedBatchDetail(batchName, gtin, packagingLevel)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.editBatch = response;
    });
  }

  onEditBtnClick() {
    var reqData: EditBatchReq = {
      AccountName: this.editBatch.AccountName,
      BatchName: this.editBatch.BatchName,
      GTIN: this.editBatch.GTIN,
      PackagingLevel: this.editBatch.PackagingLevel,
      Layers: this.editBatch.Layers,
      ItemsInLayer: this.editBatch.ItemsInLayer,
      Quantity: this.quantity
    };
    this.batchDetailsService.updateBatch(reqData)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      void this.router.navigateByUrl('batchdetails');
    });
  }
}
