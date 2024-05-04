import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { AuditReportRes } from '../../../../../../shared/models/entities/audit-report/audit-report-res.model';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../../../../../../shared/components/page/pagination/pagination.component';
import { PaginationCountPipe } from "../../../../../../shared/pipes/pagination-count.pipe";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-list-audit-report',
    standalone: true,
    templateUrl: './list-audit-report.component.html',
    styleUrl: './list-audit-report.component.scss',
    imports: [
        RouterModule,
        PageHeaderComponent,
        PageHeaderComponent,
        PaginationComponent,
        PaginationCountPipe,
        NgxPaginationModule
    ]
})
export class ListAuditReportComponent extends BaseComponent implements OnInit {

  @Input() auditReport !: AuditReportRes;
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() totalCount!: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();



  constructor() {
    super()
    this.auditReport = new AuditReportRes();
  }

  ngOnInit(): void {

  }

  onPageChange(currentPage: number): void {
    this.pageChange.emit(currentPage);
  }

}
