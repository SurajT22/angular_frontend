import { Component } from '@angular/core';
import { ListSsccDetailsComponent } from './components/list-sscc-details/list-sscc-details.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';

@Component({
  selector: 'app-sscc-details',
  standalone: true,
  imports: [
    ListSsccDetailsComponent
  ],
  templateUrl: './sscc-details.component.html',
  styleUrl: './sscc-details.component.scss'
})
export class SsccDetailsComponent extends BaseComponent {

}
