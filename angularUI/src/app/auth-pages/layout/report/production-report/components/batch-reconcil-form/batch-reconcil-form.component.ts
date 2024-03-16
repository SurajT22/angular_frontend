import { Component, inject } from '@angular/core';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { FormBtnPrComponent } from "../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { ActivatedRoute } from '@angular/router';
import { ReportTypeEnum } from '../../../../../../shared/models/view/report/production-report/enums/report-type.enum';

@Component({
    selector: 'app-batch-reconcil-form',
    standalone: true,
    templateUrl: './batch-reconcil-form.component.html',
    styleUrl: './batch-reconcil-form.component.scss',
    imports: [NgSelectComponent, FormBtnPrComponent]
})
export class BatchReconcilFormComponent {
onBtnClick() {
throw new Error('Method not implemented.');
}

    activatedRoute = inject(ActivatedRoute);
   
    reportTypeEnum = ReportTypeEnum;
    reportTypeList = [
      { label: "Serialization", value: ReportTypeEnum.SERAILIZATION },
      { label: "Parent Child", value: ReportTypeEnum.PARENTCHILD }
    ]
    batchList=[
      'JDMQ1',
      'ABC1',
      'Batch1'
    ]
    gtinList=[
      '08904231102545',
      '28904231102549',
      '48904231102543',
      '08904231102545'
    ]
    packagingLevelList = [
      '0',
      '1',
      '2',
      '3',
      '4'
    ]

}
