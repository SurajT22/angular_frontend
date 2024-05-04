import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { User } from '../../../../../../shared/models/entities/user/user.model';
import { StatusEnumHtmlPipe } from '../../../../../../shared/pipes/status-enum-html.pipe';
import { UserTypeEnumPipe } from '../../pipe/user-type-enum.pipe';
import { RouterModule } from '@angular/router';
import { UserAccountService } from '../../user-account.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-user-account',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    StatusEnumHtmlPipe,
    UserTypeEnumPipe
  ],
  templateUrl: './list-user-account.component.html',
  styleUrl: './list-user-account.component.scss'
})
export class ListUserAccountComponent extends BaseComponent implements OnInit{
  userAccountService = inject(UserAccountService);

  userList!: User[];

  constructor(){
    super();
  }
  
  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.userAccountService.getAllUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.userList = res;
    });
  }
}
