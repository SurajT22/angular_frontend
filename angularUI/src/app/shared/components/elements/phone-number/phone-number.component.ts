/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, Input } from '@angular/core';
import { Phone } from '../../../models/common/phone.model';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { NgSelectComponent } from '../ng-select/ng-select.component';

@Component({
  selector: 'app-phone-number',
  standalone: true,
  imports: [FormsModule, NgSelectComponent],
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PhoneNumberComponent {
  countryCodes = [
    '+91', // India
    '+880', //Bangladesh
    '+1', // United States (US), Canada
    '+44', // United Kingdom – UK
    '+971', // United Arab Emirates - UAE
  ];
  _phone!: Phone;
  @Input() set phone(value: Phone | unknown) {
    this._phone = value as Phone;
  }
  get phone(): Phone {
    return this._phone;
  }
  @Input() required!: boolean;
  @Input() label = 'Mobile No.';
}
