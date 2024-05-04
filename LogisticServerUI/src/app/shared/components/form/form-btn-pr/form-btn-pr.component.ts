import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-btn-pr',
  standalone: true,
  imports: [],
  template: `<button
    class="btn is-primary-btn footer-btn is-primary"
    (click)="onBtnClick()"
    [disabled]="disabled"
  >
    {{ btnLabel }}
  </button> `,
  styleUrl: './form-btn-pr.component.scss',
})
export class FormBtnPrComponent {
  private _disabled: boolean = false;
  @Input() btnLabel!: string;
  @Output() btnClick: EventEmitter<unknown> = new EventEmitter();
  @Input() skipFormValidation = false;
  @Input() set disabled(value: boolean){
    this._disabled = value;
  }
  get disabled() :boolean{
    return this._disabled || (!this.skipFormValidation && this.control.form.invalid)
  };
  control = inject(NgForm);

  onBtnClick() {
    this.btnClick.emit();
  }
}
