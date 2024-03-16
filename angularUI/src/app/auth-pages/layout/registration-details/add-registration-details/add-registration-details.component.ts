import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { Client } from '../../../../shared/models/entities/client-registration/client.model';
import { ClientFormComponent } from '../components/client-form/client-form.component';

@Component({
  selector: 'app-add-registration-details',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ClientFormComponent
  ],
  templateUrl: './add-registration-details.component.html',
  styleUrl: './add-registration-details.component.scss'
})
export class AddRegistrationDetailsComponent extends BaseComponent {

  client: Client;

  constructor() {
    super();
    this.client = new Client();
  }
  
  addClient(){

  }
}
