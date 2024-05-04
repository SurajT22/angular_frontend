import { Component, inject } from '@angular/core';
import { PrefixFormComponent } from '../components/prefix-form/prefix-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { PrefixDetail } from '../../../../../../shared/models/entities/server-settings/prefix.model';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { PrefixDetailsService } from '../prefix-details.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-edit-prefix-details',
  standalone: true,
  imports: [
    PageHeaderComponent,
    PrefixFormComponent,
  ],
  templateUrl: './edit-prefix-details.component.html',
  styleUrl: './edit-prefix-details.component.scss'
})
export class EditPrefixDetailsComponent extends BaseComponent {
  prefixDetailsService = inject(PrefixDetailsService);
  router = inject(Router);


  prefix:PrefixDetail;


  constructor(){
    super();
    this.prefix = new PrefixDetail();
  }

  editPrefix(prefix: PrefixDetail | null){
    this.prefix = prefix as unknown as PrefixDetail;
    this.prefixDetailsService
    .updatePrefix(this.prefix)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      void this.router.navigateByUrl('serversettings/prefixdetails');
    });
  }

}
