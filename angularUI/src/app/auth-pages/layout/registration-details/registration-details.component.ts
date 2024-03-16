import { Component } from '@angular/core';
import { ListRegistrationDetailsComponent } from './components/list-registration-details/list-registration-details.component';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-registration-details',
  standalone: true,
  imports: [
    ListRegistrationDetailsComponent
  ],
  templateUrl: './registration-details.component.html',
  styleUrl: './registration-details.component.scss'
})
export class RegistrationDetailsComponent extends BaseComponent {

}
