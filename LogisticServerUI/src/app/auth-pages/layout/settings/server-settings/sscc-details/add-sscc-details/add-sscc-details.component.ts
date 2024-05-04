import { Component, inject } from '@angular/core';
import { SsccFormComponent } from '../components/sscc-form/sscc-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { Router } from '@angular/router';
import { SsccDetailsService } from '../sscc-details.service';
import { Sscc } from '../../../../../../shared/models/entities/server-settings/sscc.model';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { AddSsccReq } from '../../../../../../shared/models/entities/server-settings/add-sscc-req.model';

@Component({
  selector: 'app-add-sscc-details',
  standalone: true,
  imports: [
    PageHeaderComponent,
    SsccFormComponent
  ],
  templateUrl: './add-sscc-details.component.html',
  styleUrl: './add-sscc-details.component.scss'
})
export class AddSsccDetailsComponent extends BaseComponent {
  router = inject(Router);
  ssccDetailsService = inject(SsccDetailsService);
  sscc: Sscc;
  constructor() {
    super();
    this.sscc = new Sscc();
  }

  addSscc(sscc: Sscc | null) {
    var addReq: AddSsccReq = {
      Quantity: sscc?.Quantity as string,
      CompanyPrefix: sscc?.CompanyPrefix as string,
      StartRange: sscc?.StartRange as string,
      ExtentionDigit: sscc?.ExtentionDigit as string,
      Regulatory: sscc?.Regulatory as string
    }
    this.ssccDetailsService
      .createSscc(addReq)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        void this.router.navigateByUrl('serversettings/ssccdetails');
      });
  }


}
