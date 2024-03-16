import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { AuditReport } from '../../../../../../shared/models/entities/audit-report/audit-report.model';
import { ReportSelectionEnum } from '../../../../../../shared/models/entities/audit-report/enums/report-selection.enum';
import { StationEnum } from '../../../../../../shared/models/entities/audit-report/enums/station.enum';
import { AuditReportFormComponent } from '../audit-report-form/audit-report-form.component';

@Component({
  selector: 'app-list-audit-report',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    PageHeaderComponent,
    AuditReportFormComponent
  ],
  templateUrl: './list-audit-report.component.html',
  styleUrl: './list-audit-report.component.scss'
})
export class ListAuditReportComponent extends BaseComponent implements OnInit {

  // @Input() auditreport: AuditReport;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<AuditReport | null> = new EventEmitter();

  activatedRoute = inject(ActivatedRoute);
  auditReportList: AuditReport[] = [{
    DateTime: '24-01-20 12:14:22',
    UserName: "Admin",
    Audit: "xyz",
    Activity: "User Login Successfully",
    CurrentValue: "NA",
    PreviousValue: "NA",
    Model: "Main",
    Batch: "-",
    Type: "User",
    ReportSelection: ReportSelectionEnum.UserName,
    Station: StationEnum.server,
  },]
  constructor() {
    super()

  }

  ngOnInit(): void {

  }


}
