import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { ListUserAccountComponent } from './components/list-user-account/list-user-account.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    ListUserAccountComponent
  ],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent extends BaseComponent {

}
