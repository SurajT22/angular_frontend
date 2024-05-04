/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CheckboxComponent {
  @Input() value!: boolean | unknown;
  @Input() label = '';
  @Input() required = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter();
  uniqueId = 'id' + Math.random().toString(36).substring(5);
}
