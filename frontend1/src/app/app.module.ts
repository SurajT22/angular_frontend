import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SharedService } from './shared.service';
import { ShowUsermanagementComponent } from './usermanagement/show-usermanagement/show-usermanagement.component';
import { AddEditUsermanagementComponent } from './usermanagement/add-edit-usermanagement/add-edit-usermanagement.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SuccessMessageSourceService } from './success-message-source.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SecurityPolicyComponent } from './security-policy/security-policy.component';
import { AddUpdateSecurityPolicyComponent } from './security-policy/add-update-security-policy/add-update-security-policy.component';
import { UserRightsComponent } from './user-rights/user-rights.component';
import { AddUsermanagementComponent } from './usermanagement/add-usermanagement/add-usermanagement.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationAccessComponent } from './client-registration/registration-access/registration-access.component';
import { RegistrationDetailsComponent } from './client-registration/registration-details/registration-details.component';
import { AddEditRegistrationDetailsComponent } from './client-registration/registration-details/add-edit-registration-details/add-edit-registration-details.component';
import { ServerSettingsComponent } from './server-settings/server-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    UsermanagementComponent,
    ShowUsermanagementComponent,
    AddEditUsermanagementComponent,
    SidebarComponent,
    SecurityPolicyComponent,
    AddUpdateSecurityPolicyComponent,
    UserRightsComponent,
    AddUsermanagementComponent,
    RegistrationAccessComponent,
    RegistrationDetailsComponent,
    AddEditRegistrationDetailsComponent,
    ServerSettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService,SuccessMessageSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
