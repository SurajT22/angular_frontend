/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class EmailComponent {
  @Input() label = '';
  @Input() value: string | unknown = '';
  @Input() required = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter();
  uniqueId = 'id' + Math.random().toString(36).substring(5);
}
