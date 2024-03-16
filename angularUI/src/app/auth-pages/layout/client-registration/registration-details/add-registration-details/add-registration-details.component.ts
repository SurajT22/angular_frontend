import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { Client } from '../../../../../shared/models/entities/client-registration/client.model';
import { ClientFormComponent } from '../components/client-form/client-form.component';
import { RegistrationDetailsService } from '../registration-details.service';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';

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
  router = inject(Router);
  registrationDetailsService = inject(RegistrationDetailsService);

  client: Client;

  constructor() {
    super();
    this.client = new Client();
  }
  
  addClient(){
    this.client.Date_Time = new Date();
    this.registrationDetailsService
    .createClient(this.client)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: Client) => {
      void this.router.navigateByUrl('registrationdetails');
    });
  }
}
