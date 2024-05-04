import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { Router } from '@angular/router';
import { PrefixDetail } from '../../../../../../shared/models/entities/server-settings/prefix.model';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { PrefixDetailsService } from '../prefix-details.service';
import { takeUntil } from 'rxjs';
import { PrefixFormComponent } from "../components/prefix-form/prefix-form.component";

@Component({
    selector: 'app-add-prefix-details',
    standalone: true,
    templateUrl: './add-prefix-details.component.html',
    styleUrl: './add-prefix-details.component.scss',
    imports: [
        PageHeaderComponent,
        PrefixFormComponent
    ]
})
export class AddPrefixDetailsComponent extends BaseComponent {
  router = inject(Router);
  prefixdetailservice = inject(PrefixDetailsService)
  prefix: PrefixDetail;
  constructor() {
    super();
    this.prefix = new PrefixDetail();
  }
  addPrefix() {
      this.prefixdetailservice
      .createPrefix(this.prefix)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        void this.router.navigateByUrl('serversettings/prefixdetails');
      });
  }
}

