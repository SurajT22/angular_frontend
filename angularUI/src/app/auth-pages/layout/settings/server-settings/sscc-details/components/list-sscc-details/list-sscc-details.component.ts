import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../../../shared/components/page/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { SsccStatusEnum } from '../../../../../../../shared/models/entities/server-settings/enums/sscc-status.enum';
import { SsccStatusHtmlPipe } from '../../pipe/sscc-details-status.pipe';
import { ConfirmDialogService } from '../../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { Sscc } from '../../../../../../../shared/models/entities/server-settings/sscc.model';
import { RegulatoryEnum } from '../../../../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';

@Component({
  selector: 'app-list-sscc-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    SsccStatusHtmlPipe
  ],
  templateUrl: './list-sscc-details.component.html',
  styleUrl: './list-sscc-details.component.scss'
})
export class ListSsccDetailsComponent extends BaseComponent implements OnInit {

  confirmDialogService = inject(ConfirmDialogService);

  ssccList: Sscc[] = [{
    ID: "1",
    Start: "1",
    End: "1000000",
    UserLimit: "200115",
    ExDigit: "1",
    Status: SsccStatusEnum.Open,
    DateTime: new Date(),
    Regulatory: RegulatoryEnum.BAHRAIN,
    RemainingQty: "-190115",
    CompanyPrefrix: "123",
    Quantity:'',

  },
  {
    ID: "2",
    Start: "2",
    End: "1000000",
    UserLimit: "200166",
    ExDigit: "2",
    Status: SsccStatusEnum.Close,
    DateTime: new Date(),
    Regulatory: RegulatoryEnum.BAHRAIN,
    RemainingQty: "-190115",
    CompanyPrefrix: "34353",
    Quantity:'',
  }

]

  ngOnInit(): void {

  }

  clickDeleteSscc(){
    this.confirmDialogService.confirm(()=>{

    },"This SSCC will be deleted", undefined, "Delete");
  }

}
