import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { MasterSettings } from '../../../../../shared/models/entities/system-setting/master-settings.model';
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { NumberComponent } from "../../../../../shared/components/elements/number/number.component";
import { CheckboxComponent } from "../../../../../shared/components/elements/checkbox/checkbox.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { MoreSettingService } from '../more-settings.service';
import { EmailConfiguration } from '../../../../../shared/models/entities/system-setting/email-configuration.model';


@Component({
    selector: 'app-master-settings',
    standalone: true,
    templateUrl: './master-settings.component.html',
    styleUrl: './master-settings.component.scss',
    imports: [
        PageHeaderComponent,
        NumberComponent,
        CheckboxComponent,
        FormBtnPrComponent,
        FormsModule,
        NgSelectComponent
    ]
})
export class MasterSettingsComponent extends BaseComponent{
  moreSettingService=inject(MoreSettingService)

  mastersetting:MasterSettings;
  
  

  systemLanguageList = [
    "English (U.S.)",
    "Russian"
  ];
  numberLoadingList=[
    "File Based",
    "Auto Loading",
    "Third Party"
  ];
  uploadMethodList = [
    "SFTP",
    "HTTP"
  ];
  thirdPartyMultiAccountList = [
    "Enabled",
    "Disable",
    "Disable and Grayed Out"
  ];
  contextTypeList = [
    "Machine",
    "Domain",
    "ApplicationDirectory"
  ];
  temporaryLicenseDaysList = [
    "15",
    "30"
  ];
  uploadDelayList = [
    "xyz"
  ];
  importFileMethodList = [
    "SFTP",
    "HTTP"
  ];

  constructor() {
    super();
    this.mastersetting = new MasterSettings();
  }

  ngOnInit(){
    this.getMasterSettings();
  }
  getMasterSettings(){
    this.moreSettingService.getMasterSettings()
    .subscribe((res)=>{
      this.mastersetting = res;
    });
  }

  onUpdateBtnClick(){
   this.moreSettingService.updateMasterSettings(this.mastersetting)
   .subscribe(() =>{
    
   });
  }

  
}
