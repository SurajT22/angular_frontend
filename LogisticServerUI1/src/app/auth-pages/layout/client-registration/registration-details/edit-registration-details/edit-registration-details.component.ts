import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { Client } from '../../../../../shared/models/entities/client-registration/client.model';
import { RegistrationDetailsService } from '../registration-details.service';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';

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
  registrationDetailsService = inject(RegistrationDetailsService);
  router = inject(Router);

  client: Client;

  constructor(){
    super();
    this.client = new Client();
  }

  editClient(client: Client | null){
    this.client = client as unknown as Client;
    this.client.DateTime = new Date();
    this.registrationDetailsService
    .updateClient(this.client)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      void this.router.navigateByUrl('registrationdetails');
    });
  }
}
