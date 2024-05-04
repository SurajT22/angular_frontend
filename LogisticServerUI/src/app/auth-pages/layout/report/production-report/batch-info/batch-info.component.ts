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
import { BatchFilterFormComponent } from "../components/batch-filter-form/batch-filter-form.component";
import { BtnPrComponent } from "../../../../../shared/components/elements/button/btn-pr/btn-pr.component";
import { ProductionReportDataReq } from '../../../../../shared/models/entities/production-report/production-report-data-req.model';
import { ProductionReportDataRes } from '../../../../../shared/models/entities/production-report/production-report-data-res.model';
import { ProductionReport } from '../../../../../shared/models/view/report/production-report/production-report.model';
import { ProductionReportService } from '../production-report.service';
import { ProductionReportPageData } from '../../../../../shared/models/entities/production-report/production-report-page-data.model';
import { ReportViewEnum } from '../../../../../shared/models/view/report/production-report/enums/report-view.enum';
import { takeUntil } from 'rxjs';
import { ProductionReportExportReq } from '../../../../../shared/models/entities/production-report/production-report-export-req.model';
import { StationDetails } from '../../../../../shared/models/entities/production-report/station-details.model';
import { CountData } from '../../../../../shared/models/entities/production-report/count-data.model';

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
    BatchFilterFormComponent,
    BtnPrComponent
  ]
})
export class BatchInfoComponent extends BaseComponent implements OnInit {
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

  get countData():CountData{
    return this.reportDataRes.CountData ? this.reportDataRes.CountData : new CountData;
  }

  get serilizationData():StationDetails{
    return (this.reportDataRes.StationDetails)? this.reportDataRes.StationDetails as StationDetails : new StationDetails;
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

    this.reportDataReq.ReportType = this.productionreport.ReportType.toString();
    this.reportDataReq.ReportName = "4";
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
