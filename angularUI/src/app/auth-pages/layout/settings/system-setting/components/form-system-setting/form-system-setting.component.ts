import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { SystemSetting } from '../../../../../../shared/models/entities/system-setting/system-setting.model';
import { CheckboxComponent } from '../../../../../../shared/components/elements/checkbox/checkbox.component';
import { FormBtnPrComponent } from '../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';

@Component({
  selector: 'app-form-system-setting',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    FormsModule,
    TextComponent,
    FormBtnPrComponent,
    NgSelectComponent,
    CheckboxComponent
  ],
  templateUrl: './form-system-setting.component.html',
  styleUrl: './form-system-setting.component.scss'
})
export class FormSystemSettingComponent extends BaseComponent implements OnInit {

  @Input() systemsetting: SystemSetting
  @Input() btnLabel = 'Save';
  @Output() btnClick: EventEmitter<SystemSetting | null> = new EventEmitter();
  activatedRoute = inject(ActivatedRoute);
  reportFormatList = [
    "HTML",
    "PDF",
    "XML"
  ]
  reportViewList = [
    "Table",
  ]
  dateFormatList = [
    "YYYY-MM-DD HH:MM:SS",
    "DD-MM-YYYY HH:MM:SS"
  ]
  ErrorLogList = [
    "All",
    "Error"
  ]
  isErrorLogChecked!: boolean;


  constructor() {
    super();
    this.systemsetting = new SystemSetting();
    this.systemsetting.ErrorLog = this.isErrorLogChecked ? this.systemsetting.ErrorLog : 'disable';
  }
  ngOnInit(): void {

  }
  onBtnClick(): void {
    this.btnClick.emit(this.systemsetting);
  }
}
