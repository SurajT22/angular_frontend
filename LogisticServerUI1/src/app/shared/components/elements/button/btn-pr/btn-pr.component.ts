import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pr',
  standalone: true,
  imports: [],
  styleUrl: './btn-pr.component.scss',
  template: `<button
    class="btn is-primary-btn is-primary cust-btn {{class}}"
    [disabled]="disabled"
    (click)="onBtnClick()"
  >
    {{ btnLabel }}
  </button>`,
})
export class BtnPrComponent {
  @Input() btnLabel = 'Save';
  @Input() disabled = false;
  @Input() class = "";
  @Output() btnClick: EventEmitter<unknown> = new EventEmitter();

  onBtnClick() {
    this.btnClick.emit();
  }
}
