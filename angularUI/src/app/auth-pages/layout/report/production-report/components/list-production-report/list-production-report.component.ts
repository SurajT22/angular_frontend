import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ActivatedRoute } from '@angular/router';
import { Serailization } from '../../../../../../shared/models/view/serialization-production-report.model';
import { CommonModule } from '@angular/common';
import { Pcr } from '../../../../../../shared/models/view/pcr-production-report.model';
import { ReportTypeEnum } from '../../../../../../shared/models/view/report/production-report/enums/report-type.enum';

@Component({
  selector: 'app-list-production-report',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-production-report.component.html',
  styleUrl: './list-production-report.component.scss'
})
export class ListProductionReportComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  @Input() reportType !: ReportTypeEnum;
  reportTypeEnum = ReportTypeEnum;
  serailizationProductReportList: Serailization[] = [{
    serialNumber: '106Y1VVH1RD48R',
    status: 'Accepted',
    dateTime: '21-09-2021 18:49:33',
    reason: 'NA',
  },
  {
    serialNumber: '01UXUWEUC106Y1VVH1RD48R',
    status: 'Accepted',
    dateTime: '23-05-12 10:14:17',
    reason: 'NA',
  },
  {
    serialNumber: '01UXUWEUC',
    status: 'Accepted',
    dateTime: '23-05-12 10:14:17',
    reason: 'NA',
  }]

  pcrProductReportList: Pcr[] = [{
    Bottle: '106Y1VVH1RD48R',
    Case: '000007764837144',
    Pallet: 'NA',
  },
  {
    Bottle: '106Y1VVH1RD48R',
    Case: '000007764837144',
    Pallet: 'NA',
  }]
  constructor() {
    super()

  }
  ngOnInit(): void {

  }

}
