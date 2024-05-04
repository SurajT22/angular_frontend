import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { BtnPrComponent } from '../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { TabDirective, TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { UidTypeEnum } from '../../../../shared/models/entities/server-settings/enums/uid-type.enum';
import { NumberComponent } from '../../../../shared/components/elements/number/number.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { NgTemplateOutlet } from '@angular/common';
import { UidDetailsFormComponent } from './components/uid-details-form/uid-details-form.component';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { AuthService } from '../../../../core/services/auth.service';
import { ServerSettingService } from './server-settings.service';
import { takeUntil } from 'rxjs';
import { AvailableUidLength } from '../../../../shared/models/entities/server-settings/available-uid-length.model';
import { UidTypeEnumPipe } from './pipe/uid-type-enum.pipe';
import { GenerateUidReq } from '../../../../shared/models/entities/server-settings/generate-uid-req.model';

@Component({
  selector: 'app-server-settings',
  standalone: true,
  imports: [
    TextComponent,
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
  styleUrl: './server-settings.component.scss',
  providers: [
    UidTypeEnumPipe
  ]
})
export class ServerSettingsComponent extends BaseComponent implements OnInit {
  @ViewChild('uidTabs', { static: false }) uidTabs?: TabsetComponent;

  router = inject(Router);
  authService = inject(AuthService);
  serverSettingService = inject(ServerSettingService);
  uidTypeEnumPipe = inject(UidTypeEnumPipe);

  uidTypeEnum = UidTypeEnum;
  uidLength !: string;
  selectedUIDType : UidTypeEnum = UidTypeEnum.AlphaNumeric;
  availableUidLength !: AvailableUidLength;


  constructor(){
    super();
    this.availableUidLength = new AvailableUidLength();
  }

  ngOnInit(): void {
    this.getAvailableUidLength();
  }

  onPrefixBtnClick(){
    void this.router.navigateByUrl('serversettings/prefixdetails');
  }

  onSsccBtnClick(){
    void this.router.navigateByUrl('serversettings/ssccdetails');
  }

  onUidTabSelect(data: TabDirective){
    this.selectedUIDType = <UidTypeEnum>parseInt(data.id as string);
  }

  onSaveBtnClick(){
    const uidRequest : GenerateUidReq = {
      UidDigit : this.uidLength,
      UidType : this.uidTypeEnumPipe.transform(this.selectedUIDType)
    }

    this.serverSettingService.generateUid(uidRequest)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      this.getAvailableUidLength();
    });
  }

  getAvailableUidLength(){
    this.serverSettingService.getAvailableUidLengths()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.availableUidLength = response;
    });
  }
}
