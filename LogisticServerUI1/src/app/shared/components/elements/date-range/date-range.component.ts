/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DateRange } from '../../../models/common/date-range.model';


@Component({
  selector: 'app-date-range',
  standalone: true,
  imports:[
    FormsModule,
    BsDatepickerModule
  ],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DateRangeComponent {
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder = '';
  @Output() dateRangeChange = new EventEmitter();
  @Output() onRangeChange = new EventEmitter();
  uniqueId = 'id' + Math.random().toString(36).substring(5);

  inputRange: Date[] = [];

  private _dateRange!: DateRange | null;
  get dateRange() {
    return this._dateRange;
  }
  @Input()
  set dateRange(value: DateRange | null) {
    if (value) {
      this._dateRange = value;
      this.setDisplayDate();
    } else {
      this.inputRange = [];
    }
  }

  private _showClearBtn = false;
  get showClearBtn() {
    return this._showClearBtn;
  }
  @Input()
  set showClearBtn(value: boolean) {
    this._showClearBtn = value && !this.required;
  }

  setDisplayDate() {
    if (!this.dateRange || !this.dateRange.isValidRange()) return;
    this.showClearBtn = true;
    this.inputRange = [
      new Date(this.dateRange?.start),
      new Date(this.dateRange?.end),
    ];
  }

  onDateRangeChange() {
    if (this.dateRange == null) {
      this.dateRange = new DateRange();
    }
    this.dateRange.start = new Date(this.inputRange[0].setHours(0, 0, 0));
    this.dateRange.end = new Date(this.inputRange[1].setHours(23, 59, 59));
    this.dateRangeChange.emit(this.dateRange);
    this.onRangeChange.emit(this.dateRange);
  }

  clearDateRange() {
    this._dateRange = null;
    this.dateRange = null;
    this.dateRangeChange.emit(this.dateRange);
    this.onRangeChange.emit(this.dateRange);
  }
}
