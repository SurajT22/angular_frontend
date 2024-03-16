import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { UserAccountFormComponent } from '../components/user-account-form/user-account-form.component';
import { User } from '../../../../../shared/models/entities/user/user.model';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { ChangePassDialogService } from '../../../../../shared/components/dialogs/change-password-dialog/change-password-dialog.service';
import { UserAccountService } from '../user-account.service';
import { Router } from '@angular/router';
import { ForgetPassDialogService } from '../../../../../shared/components/dialogs/forget-password-dialog/forget-password-dialog.service';

@Component({
  selector: 'app-edit-user-account',
  standalone: true,
  imports: [
    PageHeaderComponent,
    UserAccountFormComponent
  ],
  templateUrl: './edit-user-account.component.html',
  styleUrl: './edit-user-account.component.scss'
})
export class EditUserAccountComponent extends BaseComponent {
  changePassDialogService = inject(ChangePassDialogService);
  forgetPassDialogService = inject(ForgetPassDialogService);
  userAccountService = inject(UserAccountService);
  router = inject(Router);
  
  user!: User;

  constructor(){
    super();
    this.user = new User();
  }

  editUser(user: User | null){
    this.user = user as unknown as User;
    this.userAccountService.updateUser(this.user)
    .subscribe(()=>{
      void this.router.navigateByUrl('useraccount');
    });
  }

  changeUserPassword(user: User| null){
    if(user){
      this.changePassDialogService.show(()=>{

      }, user);
    }
  }

  forgetPassword(user: User| null){
    if(user){
      this.forgetPassDialogService.show(()=>{

      }, user);
    }
  }
}
