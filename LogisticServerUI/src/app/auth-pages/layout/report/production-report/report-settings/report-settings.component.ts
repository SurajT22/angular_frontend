import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../shared/components/elements/text/text.component";
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from "../../../../../shared/components/elements/checkbox/checkbox.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { ProductionReportService } from '../production-report.service';
import { takeUntil } from 'rxjs';
import { ReportSettings } from '../../../../../shared/models/entities/report-settings/report-settings.model';
import { MultiLineComponent } from '../../../../../shared/components/elements/multi-line/multi-line.component';


@Component({
  selector: 'app-report-settings',
  standalone: true,
  templateUrl: './report-settings.component.html',
  styleUrl: './report-settings.component.scss',
  imports: [
    PageHeaderComponent,
    NgSelectComponent,
    TextComponent,
    FormsModule,
    CheckboxComponent,
    FormBtnPrComponent,
    MultiLineComponent
  ]
})
export class ReportSettingsComponent extends BaseComponent implements OnInit {

  productionReportService = inject(ProductionReportService);

  reportSettings : ReportSettings;

  constructor() {
    super();
    this.reportSettings = new ReportSettings();
  }
  ngOnInit(): void {
    this.getReportSettings();
  }

  getReportSettings(){
    this.productionReportService.getReportSettings()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.reportSettings = response;
    });
  }

  onSaveBtnClick() {
    this.productionReportService.updateReportSetting(this.reportSettings)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      
    });
  }
}
