import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
sidebar() {
throw new Error('Method not implemented.');
}

  title ='debugging';
  logTOConsole(value:string){
    // this.sidebar();
    console.log("");
  }

}

