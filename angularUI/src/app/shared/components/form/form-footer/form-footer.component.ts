import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBtnBackComponent } from '../form-btn-back/form-btn-back.component';
import { FormBtnPrComponent } from '../form-btn-pr/form-btn-pr.component';

@Component({
  selector: 'app-form-footer',
  standalone: true,
  imports: [FormBtnBackComponent, FormBtnPrComponent],
  templateUrl: './form-footer.component.html',
  styleUrl: './form-footer.component.scss',
})
export class FormFooterComponent {
  @Input() btnLabel = 'Save';
  @Input() skipFormValidation = false;

  @Output() btnClick: EventEmitter<unknown> = new EventEmitter();
  onBtnClick() {
    this.btnClick.emit();
  }
}
