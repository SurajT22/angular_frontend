import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { Client } from '../../../../../shared/models/entities/client-registration/client.model';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { RegistrationDetailsService } from '../registration-details.service';
import { takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { FormsModule } from '@angular/forms';
import { TextComponent } from "../../../../../shared/components/elements/text/text.component";
import { FormFooterComponent } from "../../../../../shared/components/form/form-footer/form-footer.component";
import { RegistrationStatusEnum } from '../../../../../shared/models/entities/client-registration/enums/registration-status.enum';
import { RegulatoryEnum } from '../../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';
import { AddClientRegistration } from '../../../../../shared/models/entities/client-registration/add-client-registration.model';
import { SystemNameEnum } from '../../../../../shared/models/entities/client-registration/enums/system-name.enum';
import { SystemModel } from '../../../../../shared/models/entities/client-registration/system-model.model';


@Component({
    selector: 'app-add-registration-details',
    standalone: true,
    templateUrl: './add-registration-details.component.html',
    styleUrl: './add-registration-details.component.scss',
    imports: [
        PageHeaderComponent,
        ClientFormComponent,
        NgSelectComponent,
        FormsModule,
        TextComponent,
        FormFooterComponent
    ]
})
export class AddRegistrationDetailsComponent extends BaseComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  registrationDetailsService = inject(RegistrationDetailsService);
  @Input() btnLabel = '';
  @Output() btnClick: EventEmitter<Client | null> = new EventEmitter();
  addClientRegistration:AddClientRegistration;
  client: Client;

  
  ClientIpList !: string[];
  RegulatoryList: any[] = [];
  registrationStatusEnum = RegistrationStatusEnum;
  packagingLevelList = ["0","1","2","3","4","5","6","7","8","9"];
  selectClientIp: any[] | undefined;
  ip!: any;
  SystemModelList: SystemModel[] = [];
  SystemNameList=[
    {label:SystemNameEnum.PrintSecure,value:SystemNameEnum.PrintSecure},
    {label:SystemNameEnum.Smart360,value:SystemNameEnum.Smart360},
    {label:SystemNameEnum.AggreSecureStellar, value:SystemNameEnum.AggreSecureStellar},
    {label:SystemNameEnum.AggreSecureComet,value:SystemNameEnum.AggreSecureComet}
  ]

  

  constructor() {
    super();
    this.client = new Client();
    this.addClientRegistration = new AddClientRegistration();
    
    this.getRegulatoryDetailList();
  }
  ngOnInit(): void {
    this.getClientIpDetailList();
  }

  onSystemNameChange(systemNameValue: SystemNameEnum): void {
    // Reset SystemModelList
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


  getClientIpDetailList(){
    this.registrationDetailsService.getAllClientIp()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.ClientIpList = response;
     
    });
  }

  
  getRegulatoryDetailList() {
    this.registrationDetailsService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.RegulatoryList = res.map(item => ({
          label: item.Name,
          value: <RegulatoryEnum>item.Name, 
          disabled: !item.IsLicensed 
        }));
      })
  }


  onClientIpChange(){
    const ip = this.addClientRegistration.Ip || '';
    this.getSelectedClientIps(ip);
  }



  getSelectedClientIps(ip: string){
    this.registrationDetailsService.getSelectedClientIp(ip)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.addClientRegistration = response;
      this.addClientRegistration.Status = RegistrationStatusEnum.Registered;
      const systemName: SystemNameEnum = response.SystemName as SystemNameEnum;
      this.onSystemNameChange(systemName);
      
    });
  }


  addClient(){
    this.addClientRegistration.DateTime = new Date();
    this.registrationDetailsService
    .createClient(this.addClientRegistration)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      void this.router.navigateByUrl('registrationdetails');
    });
  }
}
