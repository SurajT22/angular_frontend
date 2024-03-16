import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../../shared/components/elements/checkbox/checkbox.component';
import { TextComponent } from '../../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { ListProductionReportComponent } from '../components/list-production-report/list-production-report.component';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { ActivatedRoute } from '@angular/router';
import { Reconcilation } from '../../../../../shared/models/view/report/reconcilation/reconcilation.model';
import { ReportTypeEnum } from '../../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { listReconcilation } from '../../../../../shared/models/view/report/reconcilation/list-reconcilation.model';
import { BatchReconcilFormComponent } from "../components/batch-reconcil-form/batch-reconcil-form.component";

@Component({
    selector: 'app-reconcilation',
    standalone: true,
    templateUrl: './reconcilation.component.html',
    styleUrl: './reconcilation.component.scss',
    imports: [
        NgSelectComponent,
        PageHeaderComponent,
        FormsModule,
        TextComponent,
        NgSelectComponent,
        CheckboxComponent,
        ListProductionReportComponent,
        FormBtnPrComponent,
        BatchReconcilFormComponent
    ]
})
export class ReconcilationComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  reconcilation:Reconcilation;
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

  reconcilationList :listReconcilation [] =[
    {
      serialNumber:'000UL6G3I03NG0U',
      currentStatus:'Accepted',
      previousStatus:'Rejected',
      dateTime:'23-07-2024 16:40:00'
    },
    {
      serialNumber:'000UL6G3I03NG0U',
      currentStatus:'Rejected',
      previousStatus:'Accepted',
      dateTime:'23-09-2024 11:00:00'
    },
  ]

  constructor() {
    super();
    this.reconcilation = new Reconcilation();
  }
  ngOnInit(): void {

  }
  onBtnClick() {
    throw new Error('Method not implemented.');
    }

}
