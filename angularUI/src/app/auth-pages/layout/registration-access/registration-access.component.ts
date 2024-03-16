import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-registration-access',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormBtnPrComponent,
    PageHeaderComponent
  ],
  templateUrl: './registration-access.component.html',
  styleUrl: './registration-access.component.scss'
})
export class RegistrationAccessComponent extends BaseComponent {

  onAccessBtnClick(){

  }
}
