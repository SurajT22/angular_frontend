import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../../shared/components/elements/checkbox/checkbox.component';
import { TextComponent } from '../../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { ListProductionReportComponent } from '../components/list-production-report/list-production-report.component';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { ReportTypeEnum } from '../../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { BatchFilterFormComponent } from '../components/batch-filter-form/batch-filter-form.component';
import { ProductionReportDataReq } from '../../../../../shared/models/entities/production-report/production-report-data-req.model';
import { ProductionReportDataRes } from '../../../../../shared/models/entities/production-report/production-report-data-res.model';
import { ProductionReportPageData } from '../../../../../shared/models/entities/production-report/production-report-page-data.model';
import { ReportViewEnum } from '../../../../../shared/models/view/report/production-report/enums/report-view.enum';
import { ProductionReport } from '../../../../../shared/models/view/report/production-report/production-report.model';
import { ProductionReportService } from '../production-report.service';
import { BtnPrComponent } from "../../../../../shared/components/elements/button/btn-pr/btn-pr.component";
import { takeUntil } from 'rxjs';
import { ProductionReportExportReq } from '../../../../../shared/models/entities/production-report/production-report-export-req.model';
import { ReconciliationData } from '../../../../../shared/models/entities/production-report/reconciliation-data.model';
import { PaginationCountPipe } from "../../../../../shared/pipes/pagination-count.pipe";
import { PaginationComponent } from "../../../../../shared/components/page/pagination/pagination.component";
import { NgxPaginationModule } from 'ngx-pagination';

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
        BatchFilterFormComponent,
        BtnPrComponent,
        PaginationCountPipe,
        PaginationComponent,
        NgxPaginationModule
    ]
})
export class ReconcilationComponent extends BaseComponent implements OnInit {
  productionReportService = inject(ProductionReportService);

  productionreport: ProductionReport;
  reportTypeEnum = ReportTypeEnum;
  reportTypeList = [
    { label: "Serialization", value: ReportTypeEnum.SERAILIZATION },
    { label: "Parent Child", value: ReportTypeEnum.PARENTCHILD }
  ];
  pageData: ProductionReportPageData;

  reportDataReq !: ProductionReportDataReq;
  reportDataRes !: ProductionReportDataRes;

  get currentPage(): number {
    return this.reportDataReq?.StartIndex ? parseInt(this.reportDataReq.StartIndex) : 0;
  }

  get pageSize(): number {
    return this.reportDataReq?.PageSize ? parseInt(this.reportDataReq.PageSize) : 0;
  }

  get totalCount(): number {
    return this.reportDataRes?.TotalData ? parseInt(this.reportDataRes.TotalData) : 0;
  }

  get reconcilationList() : ReconciliationData[] {
    return this.reportDataRes.ReconciliationData
  }

  constructor() {
    super();
    this.pageData = new ProductionReportPageData();

    this.productionreport = new ProductionReport({
      ReportType: ReportTypeEnum.SERAILIZATION,
      ReportView: ReportViewEnum.BATCH,
      Status: "All"
    });

    this.reportDataReq = new ProductionReportDataReq({
      StartIndex: "1",
      PageSize: "50"
    });

    this.reportDataRes = new ProductionReportDataRes();
    this.getFilterData();
  }

  ngOnInit(): void {

  }

  getFilterData() {
    this.productionReportService.getProductionReportPageData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.pageData = response;
      });
  }

  onExportBtnClick() {
    var reqData: ProductionReportExportReq = {
      StartPage: "",
      EndPage: "",
      ReportFormat: "PDF",
      BatchName: this.reportDataReq.BatchName,
      GTIN: this.reportDataReq.GTIN,
      PackagingLevel: this.reportDataReq.PackagingLevel,
      ReportType: this.reportDataReq.ReportType,
      ReportName: this.reportDataReq.ReportName,
      SerialNumberStatus: this.reportDataReq.SerialNumberStatus,
      Warehouse: this.reportDataReq.Warehouse,
    };

    this.productionReportService.exportProductionReport(reqData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        window.open(response);
      });
  }

  onViewBtnClick() {
    this.prepareReqData();
    this.filterAsync();
  }

  prepareReqData() {
    this.reportDataReq.BatchName = this.productionreport.BatchName;
    this.reportDataReq.GTIN = this.productionreport.GTIN;
    this.reportDataReq.PackagingLevel = this.productionreport.PackagingLevel;
    this.reportDataReq.SerialNumberStatus = this.productionreport.Status;
    this.reportDataReq.Warehouse = this.productionreport.WareHouseReport;

    this.reportDataReq.ReportType = "0";
    this.reportDataReq.ReportName = "3";
  }

  pageChange(currentPage: number): void {
    this.reportDataReq.StartIndex = currentPage.toString();
    this.filterAsync();
  }

  filterAsync() {
    this.productionReportService.viewProductionReport(this.reportDataReq)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.reportDataRes = response;
      });
  }

}
