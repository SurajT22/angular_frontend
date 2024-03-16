import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { RouterModule } from '@angular/router';
import { RegistrationStatusEnum } from '../../../../../../shared/models/entities/client-registration/enums/registration-status.enum';
import { RegistrationStatusHtmlPipe } from '../../pipe/registration-detail-status.pipe';
import { Client } from '../../../../../../shared/models/entities/client-registration/client.model';
import { ConfirmDialogService } from '../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';

@Component({
  selector: 'app-list-registration-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    RegistrationStatusHtmlPipe,
  ],
  templateUrl: './list-registration-details.component.html',
  styleUrl: './list-registration-details.component.scss'
})

export class ListRegistrationDetailsComponent extends BaseComponent implements OnInit {
  confirmDialogService = inject(ConfirmDialogService);
  clientList: Client[] = [{
    ip: "1.1.1.1",
    mac_id: "A4-B5-CC-SS-34-WW",
    line_number:"L1",
    plant_name: "P1",
    location:"Safal",
    status: RegistrationStatusEnum.Registered,
    Date_Time: new Date(),
    packaging_Level: "0",
    regulatory: "BAHRAIN",
    system_name:"P&I",
    account_type: "",
    System_Model: "KPI-TBX1",
  },
  {
    ip: "1.1.1.1",
    mac_id: "A4-B5-CC-SS-34-WW",
    line_number:"L1",
    plant_name: "P1",
    location:"Safal",
    status: RegistrationStatusEnum.NotRegistered,
    Date_Time: new Date(),
    packaging_Level: "0",
    regulatory: "BAHRAIN",
    system_name:"P&I",
    account_type: "",
    System_Model: "KPI-TBX1",
  }];


  ngOnInit(): void {
    
  }

  clickDeleteClient(){
    this.confirmDialogService.confirm(()=>{

    },"This Client will be deleted", undefined, "Delete");
  }
  

}
