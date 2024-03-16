import { Routes } from "@angular/router";
import { RegistrationDetailsComponent } from "./registration-details.component";
import { AddRegistrationDetailsComponent } from "./add-registration-details/add-registration-details.component";
import { EditRegistrationDetailsComponent } from "./edit-registration-details/edit-registration-details.component";

export const REGISTRATIONDETAILS_ROUTES: Routes = [
    {
      path: '',
      component: RegistrationDetailsComponent,
    },
    {
      path: 'add',
      component: AddRegistrationDetailsComponent,
    },
    {
      path: 'edit/:id',
      component: EditRegistrationDetailsComponent,
    },
    // {
    //   path: 'test',
    //   component: EditRegistrationDetailsComponent,
    // }
];