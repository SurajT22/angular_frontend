import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component'; 
import { AppComponent } from './app.component';
import { SecurityPolicyComponent } from './security-policy/security-policy.component';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { AddUsermanagementComponent } from './usermanagement/add-usermanagement/add-usermanagement.component';
import { RegistrationAccessComponent } from './client-registration/registration-access/registration-access.component';
import { RegistrationDetailsComponent } from './client-registration/registration-details/registration-details.component';
import { AddEditRegistrationDetailsComponent } from './client-registration/registration-details/add-edit-registration-details/add-edit-registration-details.component';
import { ServerSettingsComponent } from './server-settings/server-settings.component';

const routes: Routes = [
  {path: "profile",component:UsermanagementComponent},
  {path:"add-profile",component:AddUsermanagementComponent},
  // {path: "",component:AppComponent},
  {path:"securitypolicy",component:SecurityPolicyComponent},
  {path:"user-rights",component:UserRightsComponent},
  {path:"register-access",component:RegistrationAccessComponent},
  {path:'registration-details',component:RegistrationDetailsComponent},
  {path:'add-edit-registration-details',component:AddEditRegistrationDetailsComponent},
  {path:'add-edit-registration-details/:registration',component:AddEditRegistrationDetailsComponent},
  {path:'server-settings',component:ServerSettingsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
