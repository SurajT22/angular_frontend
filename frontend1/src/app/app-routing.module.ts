import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component'; 
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "profile",component:UsermanagementComponent},
  // {path: "",component:AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
