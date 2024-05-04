import { Component, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../../shared/components/page/page-header/page-header.component";
import { NgSelectComponent } from "../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { FormsModule } from '@angular/forms';
import { ReportTypeEnum } from '../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { ProductionReport } from '../../../../shared/models/view/report/production-report/production-report.model';
import { ListProductionReportComponent } from "./components/list-production-report/list-production-report.component";
import { NgIf } from '@angular/common';
import { ReportViewEnum } from '../../../../shared/models/view/report/production-report/enums/report-view.enum';
import { BatchFilterFormComponent } from "./components/batch-filter-form/batch-filter-form.component";
import { PcrFilterFormComponent } from "./components/pcr-filter-form/pcr-filter-form.component";
import { PoFilterFormComponent } from "./components/po-filter-form/po-filter-form.component";
import { ProductFilterFormComponent } from "./components/product-filter-form/product-filter-form.component";
import { CheckboxComponent } from "../../../../shared/components/elements/checkbox/checkbox.component";
import { ProductionReportService } from './production-report.service';
import { takeUntil } from 'rxjs';
import { ProductionReportPageData } from '../../../../shared/models/entities/production-report/production-report-page-data.model';
import { ProductionReportDataReq } from '../../../../shared/models/entities/production-report/production-report-data-req.model';
import { ProductionReportDataRes } from '../../../../shared/models/entities/production-report/production-report-data-res.model';
import { BtnPrComponent } from '../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { ProductionReportExportReq } from '../../../../shared/models/entities/production-report/production-report-export-req.model';

@Component({
  selector: 'app-production-report',
  standalone: true,
  templateUrl: './production-report.component.html',
  styleUrl: './production-report.component.scss',
  imports: [
    PageHeaderComponent,
    NgSelectComponent,
    FormsModule,
    TextComponent,
    FormBtnPrComponent,
    ListProductionReportComponent,
    NgIf,
    BatchFilterFormComponent,
    PcrFilterFormComponent,
    PoFilterFormComponent,
    ProductFilterFormComponent,
    CheckboxComponent,
    BtnPrComponent
  ]
})
export class ProductionReportComponent extends BaseComponent implements OnInit {
  productionReportService = inject(ProductionReportService);

  productionreport: ProductionReport;
  reportTypeEnum = ReportTypeEnum;
  reportViewEnum = ReportViewEnum;
  reportTypeList = [
    { label: "Serialization", value: ReportTypeEnum.SERAILIZATION },
    { label: "Parent Child", value: ReportTypeEnum.PARENTCHILD }
  ];
  reportViewList = [
    { label: "Batch", value: ReportViewEnum.BATCH },
    { label: "Product", value: ReportViewEnum.PRODUCT },
    { label: "PO/DELIVERY", value: ReportViewEnum.PO_DELIVERY }
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

  onReportViewChange() {
    this.productionreport.ProductName = "";
    this.productionreport.LineNumber = "";
    this.productionreport.BatchName = "";
    this.productionreport.GTIN = "";
    this.productionreport.PackagingLevel = "";
    this.productionreport.Status = "All";
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
    this.reportDataReq.ReportName = this.productionreport.ReportType == ReportTypeEnum.SERAILIZATION ? "0" : "1";
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
