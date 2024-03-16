import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { Client } from '../../../../../shared/models/entities/client-registration/client.model';

@Component({
  selector: 'app-edit-registration-details',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ClientFormComponent
  ],
  templateUrl: './edit-registration-details.component.html',
  styleUrl: './edit-registration-details.component.scss'
})
export class EditRegistrationDetailsComponent extends BaseComponent {
  client: Client;

  constructor(){
    super();
    this.client = new Client();
  }

  editClient(client: Client | null){
    this.client = client as unknown as Client;
  }
}
