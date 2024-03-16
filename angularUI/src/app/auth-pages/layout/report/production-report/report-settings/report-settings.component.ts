import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../shared/components/elements/text/text.component";
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from "../../../../../shared/components/elements/checkbox/checkbox.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";


@Component({
    selector: 'app-report-settings',
    standalone: true,
    templateUrl: './report-settings.component.html',
    styleUrl: './report-settings.component.scss',
    imports: [PageHeaderComponent, NgSelectComponent, TextComponent, FormsModule, CheckboxComponent, FormBtnPrComponent]
})
export class ReportSettingsComponent extends BaseComponent implements OnInit {
onBtnClick() {
throw new Error('Method not implemented.');
}

  constructor() {
    super();
  }
  ngOnInit(): void {

  }

}
