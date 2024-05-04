import { Component, inject } from '@angular/core';
import { SsccFormComponent } from '../components/sscc-form/sscc-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { Sscc } from '../../../../../../shared/models/entities/server-settings/sscc.model';
import { Router } from '@angular/router';
import { SsccDetailsService } from '../sscc-details.service';
import { takeUntil } from 'rxjs';
import { EditSsccReq } from '../../../../../../shared/models/entities/server-settings/edit-sscc-req.model';
import { RegulatoryEnum } from '../../../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';
import { SsccStatusEnum } from '../../../../../../shared/models/entities/server-settings/enums/sscc-status.enum';

@Component({
  selector: 'app-edit-sscc-details',
  standalone: true,
  imports: [
    PageHeaderComponent,
    SsccFormComponent
  ],
  templateUrl: './edit-sscc-details.component.html',
  styleUrl: './edit-sscc-details.component.scss'
})
export class EditSsccDetailsComponent extends BaseComponent {
  ssccDetailsService = inject(SsccDetailsService);
  router = inject(Router);

  sscc:Sscc;


  constructor() {
    super();
    this.sscc = new Sscc();
  }
  
  editSscc(sscc : Sscc | null) {
    var editReq: EditSsccReq = {
      ID : sscc?.ID as string,
      CompanyPrefix : sscc?.CompanyPrefix as string,
      ExtentionDigit: sscc?.ExtentionDigit as string,
      Regulatory :sscc?.Regulatory as RegulatoryEnum,
      Status: sscc?.Status as SsccStatusEnum
    }
    this.ssccDetailsService
    .updateSscc(editReq)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=> {
      void this.router.navigateByUrl('serversettings/ssccdetails');
    });
    
  }
}
