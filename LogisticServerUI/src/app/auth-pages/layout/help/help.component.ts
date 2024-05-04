import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { PageHeaderComponent } from "../../../shared/components/page/page-header/page-header.component";
import { FormsModule } from '@angular/forms';
import { BtnPrComponent } from '../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { HelpService } from './help.service';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-help',
    standalone: true,
    templateUrl: './help.component.html',
    styleUrl: './help.component.scss',
    imports: [
      PageHeaderComponent,
      FormsModule,
      BtnPrComponent
    ]
})
export class HelpComponentComponent extends BaseComponent {

  helpService = inject(HelpService);

  constructor(){
    super()
  }

  getUserManual(){
    this.helpService.getUserManualPath()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      window.open(response);
    });
  }
}
