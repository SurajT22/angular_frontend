import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { ConfirmDialogService } from '../../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { Prefix } from '../../../../../../../shared/models/entities/server-settings/prefix.model';

@Component({
  selector: 'app-list-prefix-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    
  ],
  templateUrl: './list-prefix-details.component.html',
  styleUrl: './list-prefix-details.component.scss'
})
export class ListPrefixDetailsComponent extends BaseComponent implements OnInit {

  confirmDialogService = inject(ConfirmDialogService);
  prefixList:Prefix[] = [{
    Prefix:'629500004075', 
    CustomerName :'SANOFI'
  },{
    Prefix:'629500004075', 
    CustomerName :'SANOFI'
  }]


  ngOnInit(): void {
    
  }
  
  clickDeletePrefix(){
    this.confirmDialogService.confirm(()=>{

    },"This Prefix will be deleted", undefined, "Delete");
  }

}
