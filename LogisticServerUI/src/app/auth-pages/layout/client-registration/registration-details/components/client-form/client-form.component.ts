import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { Client } from '../../../../../../shared/models/entities/client-registration/client.model';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { ActivatedRoute } from '@angular/router';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { RegistrationStatusEnum } from '../../../../../../shared/models/entities/client-registration/enums/registration-status.enum';
import { RegistrationDetailsService } from '../../registration-details.service';
import { takeUntil } from 'rxjs';
import { RegulatoryEnum } from '../../../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';
import { SystemNameEnum } from '../../../../../../shared/models/entities/client-registration/enums/system-name.enum';
import { SystemModel } from '../../../../../../shared/models/entities/client-registration/system-model.model';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  registrationDetailService = inject(RegistrationDetailsService);

  @Input() client!: Client;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<Client | null> = new EventEmitter();

  registrationStatusEnum = RegistrationStatusEnum;
  packagingLevelList = ["0","1","2","3","4","5","6","7","8","9"];

  RegulatoryList: any[] = [];
  SystemNameList=[
    {label:SystemNameEnum.PrintSecure,value:SystemNameEnum.PrintSecure},
    {label:SystemNameEnum.Smart360,value:SystemNameEnum.Smart360},
    {label:SystemNameEnum.AggreSecureStellar, value:SystemNameEnum.AggreSecureStellar},
    {label:SystemNameEnum.AggreSecureComet,value:SystemNameEnum.AggreSecureComet}
  ]
  SystemModelList: SystemModel[] = [];

  constructor() {
    super();
    this.getRegulatoryDetailList();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const ip = this.activatedRoute.snapshot.paramMap.get('ip') || '';
      const mac = this.activatedRoute.snapshot.paramMap.get('mac') || '';

      this.getClient(ip,mac);
    }

    
  }

  onSystemNameChange(systemNameValue: SystemNameEnum): void {
    this.SystemModelList = [];
  

    switch (systemNameValue) {
      case SystemNameEnum.AggreSecureComet:
        this.SystemModelList = [
          { label: 'AGS-CMS', value: 'AGS-CMS' },
          { label: 'AGS-WMS', value: 'AGS-WMS' }
        ];
        break;
      case SystemNameEnum.AggreSecureStellar:
        this.SystemModelList = [
          { label: 'AGS-TC', value: 'AGS-TC' },
          { label: 'AGS-TS', value: 'AGS-TS' },
          { label: 'AGS-TM', value: 'AGS-TM' },
          { label: 'AGS-CMS', value: 'AGS-CMS' },
        ];
        break;
        case SystemNameEnum.PrintSecure:
        this.SystemModelList = [
          { label: 'KPI-TBX1', value: 'KPI-TBX1' },
          { label: 'KPI-TBX2', value: 'KPI-TBX2' },
          { label: 'KPIT-TBX1', value: 'KPIT-TBX1' },
          { label: 'KPIT-TBX2', value: 'KPIT-TBX2' },
          { label: 'KPI-VFX1', value: 'KPI-VFX1' },
          { label: 'KPI-VFX2', value: 'KPI-VFX2' },
        ];
        break;
        case SystemNameEnum.Smart360:
        this.SystemModelList = [
          { label: 'SMART 360 D', value: 'SMART 360 D' }
        ];
        break;
     
    }
  }

  getClient(ip: string, mac: string){
    this.registrationDetailService.getClient(ip, mac)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.client = response;
      const systemName: SystemNameEnum = response.SystemName as SystemNameEnum;
      console.log("system name",systemName);
      this.onSystemNameChange(systemName);
      console.log("onsystem name change", this.onSystemNameChange(systemName))
    });
  }

  getRegulatoryDetailList() {
    this.registrationDetailService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.RegulatoryList = res.map(item => ({
          label: item.Name,
          value: <RegulatoryEnum>item.Name, 
          disabled: !item.IsLicensed 
        }));
      })
  }

  onBtnClick(): void {
    this.btnClick.emit(this.client);
  }

}
