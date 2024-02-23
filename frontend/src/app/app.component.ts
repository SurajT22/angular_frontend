import { Component } from '@angular/core';
import { NgModel } from '@angular/forms'; 
// import "../src/assets/css/custom.min.css?v=4.0.0";
// import "../src/assets/css/hope-ui.min.css?v=4.0.0";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public isCollapsed = true;
  title = 'frontend';
  successMessage: any;
}
