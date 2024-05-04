import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/common/address.model';

@Pipe({
  name: 'address',
  standalone: true,
})
export class AddressPipe implements PipeTransform {
  transform(value: Address): string {
    let str = '';
    str = [
      value?.address,
      value?.area,
      value?.city,
      value?.region,
      value?.country,
      value?.zipCode,
    ]
      .filter(Boolean)
      .join(', ');

    return str ? str : 'N/A';
  }
}
