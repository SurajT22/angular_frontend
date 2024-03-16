import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { BtnPrComponent } from '../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { TabDirective, TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { UidTypeEnum } from '../../../../shared/models/entities/server-settings/enums/uid-type.enum';
import { UidDetails } from '../../../../shared/models/entities/server-settings/uid-details.model';
import { NumberComponent } from '../../../../shared/components/elements/number/number.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { NgTemplateOutlet } from '@angular/common';
import { UidDetailsFormComponent } from './components/uid-details-form/uid-details-form.component';

@Component({
  selector: 'app-server-settings',
  standalone: true,
  imports: [
    FormsModule,
    FormBtnPrComponent,
    PageHeaderComponent,
    BtnPrComponent,
    NgSelectComponent,
    TabsModule,
    NumberComponent,
    NgTemplateOutlet,
    UidDetailsFormComponent
  ],
  templateUrl: './server-settings.component.html',
  styleUrl: './server-settings.component.scss'
})
export class ServerSettingsComponent extends BaseComponent implements OnInit {
  @ViewChild('uidTabs', { static: false }) uidTabs?: TabsetComponent;

  router = inject(Router);

  uidLengthList = ["1","2","3"]

  systemSetting = {
    uidLength : "",
    hasNumericUidFacility: true,
    uidType: UidTypeEnum.AlphaNumeric,
    uidDetails: new UidDetails()
  };
  
  ngOnInit(): void {

  }

  onPrefixBtnClick(){
    void this.router.navigateByUrl('serversettings/prefixdetails');
  }

  onSsccBtnClick(){
    void this.router.navigateByUrl('serversettings/ssccdetails');
  }

  onUidLengthChange(event: any){
    
  }

  selectUidTab(tabId: number) {
    if (this.uidTabs?.tabs[tabId]) {
      this.uidTabs.tabs[tabId].active = true;
    }
  }

  onUidTabSelect(data: TabDirective){

  }

  getUidDetails(uidType: UidTypeEnum){
  }

  onSaveBtnClick(){

  }
}
