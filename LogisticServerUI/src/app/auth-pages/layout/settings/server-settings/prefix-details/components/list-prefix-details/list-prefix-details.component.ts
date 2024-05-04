import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { ConfirmDialogService } from '../../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { PrefixDetail } from '../../../../../../../shared/models/entities/server-settings/prefix.model';
import { PrefixDetailsService } from '../../prefix-details.service';
import { takeUntil } from 'rxjs';

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
  prefixDetailsService = inject(PrefixDetailsService);


  prefixList!:PrefixDetail[];


  ngOnInit(): void {
    this.getAllPrefix();
  }

  getAllPrefix(){
    this.prefixDetailsService.getAllPrefix()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.prefixList = response;
    })
  }

  clickDeletePrefix(pref:string,cust:string){
    this.confirmDialogService.confirm((isConfirm: boolean)=>{
      if(isConfirm){
      this.deletePrefix(pref, cust);
      }
    },"This Prefix will be deleted", undefined, "Delete");
  }
  
  deletePrefix(pref:string,cust:string){
    this.prefixDetailsService.deletePrefix(pref,cust)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      this.getAllPrefix();
    })
  }

}
