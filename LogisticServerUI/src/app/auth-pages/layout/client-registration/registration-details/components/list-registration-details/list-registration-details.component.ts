import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { RouterModule } from '@angular/router';
import { RegistrationStatusHtmlPipe } from '../../pipe/registration-detail-status.pipe';
import { Client } from '../../../../../../shared/models/entities/client-registration/client.model';
import { ConfirmDialogService } from '../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { RegistrationDetailsService } from '../../registration-details.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-registration-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    RegistrationStatusHtmlPipe,
  ],
  templateUrl: './list-registration-details.component.html',
  styleUrl: './list-registration-details.component.scss'
})

export class ListRegistrationDetailsComponent extends BaseComponent implements OnInit {
  confirmDialogService = inject(ConfirmDialogService);
  registrationDetailService = inject(RegistrationDetailsService);

  clientList!: Client[];


  ngOnInit(): void {
    this.getAllClient();
  }

  getAllClient(){
    this.registrationDetailService.getAllClients()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.clientList = response;
    });
  }

  clickDeleteClient(ip: string, mac: string){
    this.confirmDialogService.confirm((isConfirm: boolean)=>{
      if(isConfirm){
        this.deleteClient(ip, mac);
      }
    },"This Client will be deleted", undefined, "Delete");
  }

  deleteClient(ip: string, mac:string){
    this.registrationDetailService.deleteClient(ip,mac)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.getAllClient();
    });
  }
}
