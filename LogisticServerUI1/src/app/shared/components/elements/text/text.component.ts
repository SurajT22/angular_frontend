/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class TextComponent {
  isErrShow = false;
  private _required!: boolean;
  private _pattern!: string;
  uniqueId = 'id' + Math.random().toString(36).substring(5);
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled: boolean = false;
  @Input() name!: string;
  @Input() value: string | unknown = '';
  @Input() patternErrMsg!: string;
  @Input() set required(value: boolean) {
    this._required = value;
    this.isErrShow = true;
  }
  get required() {
    return this._required;
  }

  @Input() set pattern(value: string) {
    this._pattern = value;
    this.isErrShow = true;
  }
  get pattern() {
    return this._pattern;
  }

  @Output() valueChange = new EventEmitter();
  @Output() valueBlur = new EventEmitter();
}
