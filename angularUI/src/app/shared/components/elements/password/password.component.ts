/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PasswordComponent {
  @Input() label = '';
  @Input() value: string | unknown = '';
  @Input() required = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter();

  isPwdShow = false;
  uniqueId = 'id' + Math.random().toString(36).substring(5);
}
