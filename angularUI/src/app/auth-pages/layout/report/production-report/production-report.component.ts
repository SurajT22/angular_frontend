import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../../shared/components/page/page-header/page-header.component";
import { NgSelectComponent } from "../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { FormsModule } from '@angular/forms';
import { ReportTypeEnum } from '../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { ActivatedRoute } from '@angular/router';
import { ProductionReport } from '../../../../shared/models/view/report/production-report/production-report.model';
import { ListProductionReportComponent } from "./components/list-production-report/list-production-report.component";
import { NgIf } from '@angular/common';
import { ReportViewEnum } from '../../../../shared/models/view/report/production-report/enums/report-view.enum';
import { BatchFilterFormComponent } from "./components/batch-filter-form/batch-filter-form.component";
import { PcrFilterFormComponent } from "./components/pcr-filter-form/pcr-filter-form.component";
import { PoFilterFormComponent } from "./components/po-filter-form/po-filter-form.component";
import { ProductFilterFormComponent } from "./components/product-filter-form/product-filter-form.component";
import { CheckboxComponent } from "../../../../shared/components/elements/checkbox/checkbox.component";

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
    NgSelectComponent,
    FormBtnPrComponent,
    ListProductionReportComponent,
    NgIf,
    BatchFilterFormComponent,
    PcrFilterFormComponent,
    PoFilterFormComponent,
    ProductFilterFormComponent,
    CheckboxComponent
  ]
})
export class ProductionReportComponent extends BaseComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  @Input() btnLabel = '';
  @Output() btnClick: EventEmitter<ProductionReport | null> = new EventEmitter();
  productionreport: ProductionReport;
  reportTypeEnum = ReportTypeEnum;
  reportViewEnum = ReportViewEnum;
  reportTypeList = [
    { label: "Serialization", value: ReportTypeEnum.SERAILIZATION },
    { label: "Parent Child", value: ReportTypeEnum.PARENTCHILD }
  ]
  reportViewList = [
    { label: "Batch", value: ReportViewEnum.BATCH },
    { label: "Product", value: ReportViewEnum.PRODUCT },
    { label: "PO/DELIVERY", value: ReportViewEnum.PODELIVERY }
  ]
  statusList = [
    'All',
    'L1'
  ]
  constructor() {
    super();
    this.productionreport = new ProductionReport();
    this.productionreport.ReportType = ReportTypeEnum.SERAILIZATION;
    this.productionreport.ReportView = ReportViewEnum.BATCH;
  }
  ngOnInit(): void {

  }
  onBtnClick(): void {
    this.btnClick.emit(this.productionreport);

  }
}
