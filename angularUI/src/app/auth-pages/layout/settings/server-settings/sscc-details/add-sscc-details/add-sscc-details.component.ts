import { Component, inject } from '@angular/core';
import { SsccFormComponent } from '../components/sscc-form/sscc-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { Router } from '@angular/router';
import { SsccDetailsService } from '../sscc-details.service';
import { Sscc } from '../../../../../../shared/models/entities/server-settings/sscc.model';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';

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

  addSscc() {
    this.sscc.DateTime = new Date();
    this.ssccDetailsService
      .createSsccDetail(this.sscc)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Sscc) => {
        void this.router.navigateByUrl('ssccdetails');
      });
  }


}
