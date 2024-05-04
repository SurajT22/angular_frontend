import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportTypeEnum } from '../../../../../../shared/models/view/report/production-report/enums/report-type.enum';
import { SerialNumberData } from '../../../../../../shared/models/entities/production-report/serial-number-data.model';
import { PaginationCountPipe } from "../../../../../../shared/pipes/pagination-count.pipe";
import { PaginationComponent } from "../../../../../../shared/components/page/pagination/pagination.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductionReportDataRes } from '../../../../../../shared/models/entities/production-report/production-report-data-res.model';
import { ParentChildData } from '../../../../../../shared/models/entities/production-report/parent-child-data.model';

@Component({
    selector: 'app-list-production-report',
    standalone: true,
    templateUrl: './list-production-report.component.html',
    styleUrl: './list-production-report.component.scss',
    imports: [
        CommonModule,
        PaginationCountPipe,
        PaginationComponent,
        NgxPaginationModule
    ]
})
export class ListProductionReportComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  @Input() reportDataRes !: ProductionReportDataRes;
  @Input() reportType !: ReportTypeEnum;
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() totalCount!: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  
  reportTypeEnum = ReportTypeEnum;
  get serializationDataList() : SerialNumberData[]{
    return  this.reportDataRes.SerialNumberData;
  };

  get pcrDataList(): ParentChildData[]{
    return this.reportDataRes.ParentChildData;
  }
  
  constructor() {
    super()
  }
  ngOnInit(): void {

  }

  onPageChange(currentPage: number): void {
    this.pageChange.emit(currentPage);
  }
}
