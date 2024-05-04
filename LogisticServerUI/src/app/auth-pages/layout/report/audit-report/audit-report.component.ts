import { Component, OnInit, inject } from '@angular/core';
import { ListAuditReportComponent } from './components/list-audit-report/list-audit-report.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { AuditReport } from '../../../../shared/models/entities/audit-report/audit-report.model';
import { FormsModule } from '@angular/forms';
import { DateRangeComponent } from '../../../../shared/components/elements/date-range/date-range.component';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { FormFooterComponent } from '../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { DateRange } from '../../../../shared/models/common/date-range.model';
import { ReportSelectionEnum } from '../../../../shared/models/entities/audit-report/enums/report-selection.enum';
import { AuditReportReq } from '../../../../shared/models/entities/audit-report/audit-report-req.model';
import { AuditReportPageData } from '../../../../shared/models/entities/audit-report/audit-report-page-data.model';
import { AuditReportService } from './audit-report.service';
import { takeUntil } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AuditReportRes } from '../../../../shared/models/entities/audit-report/audit-report-res.model';
import { PaginationCountPipe } from "../../../../shared/pipes/pagination-count.pipe";
import { PaginationComponent } from "../../../../shared/components/page/pagination/pagination.component";
import { BtnPrComponent } from '../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { AuditReportExportReq } from '../../../../shared/models/entities/audit-report/audit-report-export-req.model';

@Component({
  selector: 'app-audit-report',
  standalone: true,
  templateUrl: './audit-report.component.html',
  styleUrl: './audit-report.component.scss',
  imports: [
    ListAuditReportComponent,
    RouterModule,
    PageHeaderComponent,
    FormsModule,
    TextComponent,
    FormFooterComponent,
    FormBtnPrComponent,
    DateRangeComponent,
    NgSelectComponent,
    PaginationCountPipe,
    PaginationComponent,
    BtnPrComponent
  ]
})
export class AuditReportComponent extends BaseComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  auditReportService = inject(AuditReportService);
  datePipe = inject(DatePipe);
  router = inject(Router);

  reportSelectionEnum = ReportSelectionEnum; // Assuming you have an enum named ReportSelectionEnum
  auditReportPageData: AuditReportPageData;
  dateRange!: DateRange;
  userName !: string;
  batchName !: string;

  reportTypeList = [
    { label: "User Name", value: ReportSelectionEnum.USER_NAME },
    { label: "Date", value: ReportSelectionEnum.DATE },
    { label: "Batch Name", value: ReportSelectionEnum.BATCH_NAME }
  ];
  reportSelection: ReportSelectionEnum = ReportSelectionEnum.USER_NAME;
  auditReporRes!: AuditReportRes;
  auditReportReq: AuditReportReq;

  get currentPage() {
    return this.auditReportReq?.StartIndex ? parseInt(this.auditReportReq.StartIndex) : 0;
  }

  get pageSize() {
    return this.auditReportReq?.PageSize ? parseInt(this.auditReportReq.PageSize) : 0;
  }

  get totalCount() {
    return this.auditReporRes?.TotalData ? parseInt(this.auditReporRes.TotalData) : 0;
  }

  constructor() {
    super()
    this.auditReportPageData = new AuditReportPageData();
    this.auditReportReq = new AuditReportReq({
      StartIndex: "1",
      PageSize: "15"
    });
    this.auditReporRes = new AuditReportRes();
    this.getAuditReportPageData();
  }

  ngOnInit(): void {

  }


  getAuditReportPageData() {
    this.auditReportService.getAuditPageData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.auditReportPageData.BatchName = ["All", ...response.BatchName]
        this.auditReportPageData.Station = ["All", ...response.Station]
        this.auditReportPageData.UserName = ["All", ...response.UserName]
      });
  }

  onViewBtnClick() {
    this.prepareAuditReportReq();
    this.filterAsync();
  }

  filterAsync() {
    this.auditReportService.viewAuditReport(this.auditReportReq)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.auditReporRes = response;
      });
  }

  prepareAuditReportReq() {
    this.auditReportReq.EventFilter = "Audit";

    if ((this.reportSelection == ReportSelectionEnum.USER_NAME && this.userName == "All") || this.reportSelection != ReportSelectionEnum.USER_NAME) {
      this.auditReportReq.UserName = "";
    }
    else if (this.reportSelection == ReportSelectionEnum.USER_NAME) {
      this.auditReportReq.UserName = this.userName;
    }

    if ((this.reportSelection == ReportSelectionEnum.BATCH_NAME && this.batchName == "All") || this.reportSelection != ReportSelectionEnum.BATCH_NAME) {
      this.auditReportReq.BatchName = "";
    }
    else if (this.reportSelection == ReportSelectionEnum.BATCH_NAME) {
      this.auditReportReq.BatchName = this.batchName;
    }

    if (this.reportSelection == ReportSelectionEnum.DATE) {
      this.auditReportReq.StartDate = this.datePipe.transform(this.dateRange.start, "dd/MM/yy HH:mm:ss") as string;
      this.auditReportReq.EndDate = this.datePipe.transform(this.dateRange.end, "dd/MM/yy HH:mm:ss") as string;
    }
    else {
      this.auditReportReq.StartDate = "";
      this.auditReportReq.EndDate = "";
    }
  }

  onExportClick() {
    var reqData: AuditReportExportReq={
      StartPage:"",
      EndPage:"",
      ReportFormat:"PDF",
      BatchName: this.auditReportReq.BatchName,
      StartDate: this.auditReportReq.StartDate,
      EndDate: this.auditReportReq.EndDate,
      EventFilter:this.auditReportReq.EventFilter,
      UserName: this.auditReportReq.UserName
    };
    this.auditReportService.exportAuditReport(reqData)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      window.open(response);
    });
  }

  pageChange(currentPage: number): void {
    this.auditReportReq.StartIndex = currentPage.toString();
    this.filterAsync();
  }

}
