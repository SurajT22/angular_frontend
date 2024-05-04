import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { UserAccountFormComponent } from '../components/user-account-form/user-account-form.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { User } from '../../../../../shared/models/entities/user/user.model';
import { Router } from '@angular/router';
import { UserAccountService } from '../user-account.service';
import { takeUntil } from 'rxjs';


@Component({
  selector: 'app-add-user-account',
  standalone: true,
  imports: [
    PageHeaderComponent,
    UserAccountFormComponent,
  ],
  templateUrl: './add-user-account.component.html',
  styleUrl: './add-user-account.component.scss'
})
export class AddUserAccountComponent extends BaseComponent {
  router = inject(Router);
  userAccountService = inject(UserAccountService);

  user!: User;

  constructor() {
    super();
    this.user = new User();
  }

  addUser(){
    this.userAccountService.createUser(this.user)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      void this.router.navigateByUrl('useraccount');
    });
  }
}
