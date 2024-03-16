import { Component } from '@angular/core';
import { PrefixFormComponent } from '../components/prefix-form/prefix-form.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { Prefix } from '../../../../../../shared/models/entities/server-settings/prefix.model';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';

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
  prefix:Prefix;
  constructor(){
    super();
    this.prefix = new Prefix();
  }

  editPrefix(prefix: Prefix | null){
    this.prefix = prefix as unknown as Prefix;
  }

}
