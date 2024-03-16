import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { ActivatedRoute } from '@angular/router';
import { BatchInfo } from '../../../../../shared/models/view/report/batch-info/batch-info.model';
import { ReportTypeEnum } from '../../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { TextComponent } from '../../../../../shared/components/elements/text/text.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from "../../../../../shared/components/elements/checkbox/checkbox.component";
import { ListProductionReportComponent } from "../components/list-production-report/list-production-report.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { BatchInfoStationDetails } from '../../../../../shared/models/view/report/batch-info/batch-info-station-details.model';
import { BatchInfoStatus } from '../../../../../shared/models/view/report/batch-info/batch-info-status.model';
import { BatchReconcilFormComponent } from "../components/batch-reconcil-form/batch-reconcil-form.component";

@Component({
    selector: 'app-batch-info',
    standalone: true,
    templateUrl: './batch-info.component.html',
    styleUrl: './batch-info.component.scss',
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
export class BatchInfoComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  @Input() btnLabel = '';
  @Output() btnClick: EventEmitter<BatchInfo | null> = new EventEmitter();
  btachinfo : BatchInfo;
  batchInfoStationDetails:BatchInfoStationDetails;
  batchInfoStatus:BatchInfoStatus;
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

  batchInfoStationDetailsList : BatchInfoStationDetails[] = [
    {
    stationDetails: 'GTIN',
    value: '2212112121454'
  },
  {
    stationDetails: 'GTIN',
    value: '2212112121454'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  },
  {
    stationDetails:'Line Number',
    value: 'L'
  }
]

  batchInfoStatusList : BatchInfoStatus[] =[{
    status:'Pending',
    quantity:'17'
  },
{
  status:'Printed',
  quantity:'4'
}]



  constructor() {
    super();
    this.btachinfo = new BatchInfo();
    this.batchInfoStationDetails = new BatchInfoStationDetails();
    this.batchInfoStatus = new BatchInfoStatus();
  }
  ngOnInit(): void {

  }
  onBtnClick() {
    throw new Error('Method not implemented.');
    }
}
