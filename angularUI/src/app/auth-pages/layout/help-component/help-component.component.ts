import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../shared/components/page/page-header/page-header.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-help-component',
    standalone: true,
    templateUrl: './help-component.component.html',
    styleUrl: './help-component.component.scss',
    imports: [PageHeaderComponent,FormsModule,]
})
export class HelpComponentComponent extends BaseComponent implements OnInit {
  constructor(){
    super()
  }
  ngOnInit(): void {
    
  }
}
