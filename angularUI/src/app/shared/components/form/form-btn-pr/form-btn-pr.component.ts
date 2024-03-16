import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-btn-pr',
  standalone: true,
  imports: [],
  template: `<button
    class="btn is-primary-btn footer-btn is-primary"
    (click)="onBtnClick()"
    [disabled]="!skipFormValidation && control.form.invalid"
  >
    {{ btnLabel }}
  </button> `,
  styleUrl: './form-btn-pr.component.scss',
})
export class FormBtnPrComponent {
  @Input() btnLabel!: string;
  @Output() btnClick: EventEmitter<unknown> = new EventEmitter();
  @Input() skipFormValidation = false;

  control = inject(NgForm);

  onBtnClick() {
    this.btnClick.emit();
  }
}
