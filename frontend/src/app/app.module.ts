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
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    UsermanagementComponent,
    ShowUsermanagementComponent,
    AddEditUsermanagementComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent
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
