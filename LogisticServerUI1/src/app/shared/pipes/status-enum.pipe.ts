/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { StatusEnum } from '../models/common/enums/status.enum';

@Pipe({
  name: 'statusEnum',
  standalone: true,
})
export class StatusEnumPipe implements PipeTransform {
  transform(statusEnum: StatusEnum): string {
    let msg = '';
    switch (statusEnum) {
      case StatusEnum.ACTIVE:
        msg = 'Active';
        break;
      case StatusEnum.INACTIVE:
        msg = 'Inactive';
        break;
    }
    return msg;
  }
}
