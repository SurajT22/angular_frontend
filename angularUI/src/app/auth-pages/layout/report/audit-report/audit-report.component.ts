import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListAuditReportComponent } from './components/list-audit-report/list-audit-report.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { AuditReportFormComponent } from "./components/audit-report-form/audit-report-form.component";
import { AuditReport } from '../../../../shared/models/entities/audit-report/audit-report.model';

@Component({
    selector: 'app-audit-report',
    standalone: true,
    templateUrl: './audit-report.component.html',
    styleUrl: './audit-report.component.scss',
    imports: [
        ListAuditReportComponent,
        RouterModule,
        PageHeaderComponent,
        AuditReportFormComponent
    ]
})
export class AuditReportComponent extends BaseComponent implements OnInit  {

  @Output() btnClick: EventEmitter<AuditReport | null> = new EventEmitter();

  constructor(){
    super()
  }
  ngOnInit(): void {
    
  }
}
