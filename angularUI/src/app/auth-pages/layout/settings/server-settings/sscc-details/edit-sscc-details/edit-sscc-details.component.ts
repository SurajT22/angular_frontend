import { Component } from '@angular/core';
import { SsccFormComponent } from '../components/sscc-form/sscc-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { Sscc } from '../../../../../../shared/models/entities/server-settings/sscc.model';

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
  sscc: Sscc;
  constructor() {
    super()
    this.sscc = new Sscc();
  }
  editClient(sscc: Sscc | null) {
    this.sscc = sscc as unknown as Sscc;
  }
}
