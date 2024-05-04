import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../models/common/phone.model';

@Pipe({
  name: 'phoneNumber',
  standalone: true,
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: Phone): string {
    let phoneNumber = value?.number;
    if (!phoneNumber) return 'N/A';

    if (value?.countryCode) {
      phoneNumber = '(' + value?.countryCode + ') ' + phoneNumber;
    }
    return phoneNumber;
  }
}
