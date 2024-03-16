/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-date',
  standalone: true,
  imports: [
    FormsModule,
    BsDatepickerModule
  ],
  providers:[
    DatePipe
  ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DateComponent {

  datePipe = inject(DatePipe);

  private _value!: string | unknown;
  get value() {
    return this._value;
  }
  @Input()
  set value(value: string | unknown) {
    if (value) {
      this._value = value;
      this.setDisplayDate();
    }
  }

  displayDate!: string | null;

  @Input() label = '';
  @Input() required = false;
  @Output() valueChange = new EventEmitter();
  uniqueId = 'id' + Math.random().toString(36).substring(5);

  constructor() {}

  setDisplayDate() {
    this.displayDate = this.datePipe.transform(
      new Date(this.value as string),
      'dd MMM yyyy'
    );
  }
}
