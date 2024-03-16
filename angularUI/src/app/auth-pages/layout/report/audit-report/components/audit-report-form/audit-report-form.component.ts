import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { AuditReport } from '../../../../../../shared/models/entities/audit-report/audit-report.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { ReportSelectionEnum } from '../../../../../../shared/models/entities/audit-report/enums/report-selection.enum';
import { StationEnum } from '../../../../../../shared/models/entities/audit-report/enums/station.enum';
import { User } from '../../../../../../shared/models/entities/user/user.model';
import { StatusEnum } from '../../../../../../shared/models/common/enums/status.enum';
import { UserRoleTypeEnum } from '../../../../../../shared/models/entities/user/enums/user-role-type.enum';
import { FormBtnPrComponent } from '../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { DateRangeComponent } from '../../../../../../shared/components/elements/date-range/date-range.component';
import { DateRange } from '../../../../../../shared/models/common/date-range.model';

@Component({
  selector: 'app-audit-report-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent,
    FormBtnPrComponent,
    DateRangeComponent
  ],
  templateUrl: './audit-report-form.component.html',
  styleUrl: './audit-report-form.component.scss'
})
export class AuditReportFormComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);

  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<AuditReport | null> = new EventEmitter();
  
  auditreport: AuditReport;
  reportSelectionEnum = ReportSelectionEnum; // Assuming you have an enum named ReportSelectionEnum
  dateRange!: DateRange;

  reportSeletcionList = [
    {label: "Username", value:ReportSelectionEnum.UserName},
    {label: "Date", value:ReportSelectionEnum.Date}
  ];

  stationSelectionList = [
    {label: "Server",value:StationEnum.server},
    {label: "Client",value:StationEnum.client},
  ]
 
  usernameSelectionList: User[] = [
    {
      UserName: "test",
      FullName: "test",
      Department:"sofy",
      EmailID: "test@123",
      Password:"123",
      Remark:"",
      UserStatus: StatusEnum.ACTIVE,
      UserType: UserRoleTypeEnum.ADMIN
    }
  ]

// ReportSelectionEnum: any;


  constructor() {
    super();
    this.auditreport = new AuditReport();  
  

  }
  ngOnInit(): void {}

  onBtnClick(): void {
    this.btnClick.emit(this.auditreport);
    
  }

}
