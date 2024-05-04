/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-multi-line',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multi-line.component.html',
  styleUrl: './multi-line.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class MultiLineComponent {
  uniqueId = 'id' + Math.random().toString(36).substring(5);
  @Input() label = '';
  @Input() value: string | unknown = '';
  @Input() required!: boolean;
  @Input() disabled = false;
  @Input() rows = 3;
  @Output() valueChange = new EventEmitter();
  @Output() keyDown = new EventEmitter();
}
