/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent {
  uniqueId!: string;
  private _value: string | unknown = '';
  @Input() label = '';
  @Input() required = false;
  @Input() options: Array<string> = [];
  @Input()
  public set value(value: string | unknown) {
    this._value = value;
    this.uniqueId = 'id' + Math.random().toString(36).substring(5);
  }

  public get value(): string | unknown {
    return this._value;
  }
  @Output() valueChange = new EventEmitter();
}
