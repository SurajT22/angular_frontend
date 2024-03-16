import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-btn-back',
  standalone: true,
  imports: [],
  template: `<button
    class="btn is-cancel-light is-light"
    (click)="onBtnClick()"
  >
    <i class=""></i>
    {{ label }}
  </button>`,
  styleUrl: './form-btn-back.component.scss',
})
export class FormBtnBackComponent {
  @Input() label = 'Back';

  onBtnClick() {
    window.history.back();
  }
}
