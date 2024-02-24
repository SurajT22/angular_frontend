import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'sidebar',component:SidebarComponent},
  {path: "",component:HomeComponent},
  {path: "profile",component:UsermanagementComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
