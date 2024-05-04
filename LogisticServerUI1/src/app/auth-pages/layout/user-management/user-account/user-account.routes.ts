import { Routes } from "@angular/router";
import { UserAccountComponent } from "./user-account.component";
import { AddUserAccountComponent } from "./add-user-account/add-user-account.component";
import { EditUserAccountComponent } from "./edit-user-account/edit-user-account.component";

export const USERACCOUNT_ROUTES: Routes = [
    {
      path: '',
      component: UserAccountComponent,
    },
    {
      path: 'add',
      component: AddUserAccountComponent,
    },
    {
      path: 'edit/:id',
      component: EditUserAccountComponent,
    }
];