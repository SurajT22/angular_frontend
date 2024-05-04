/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { InwardTypeEnum } from '../models/entities/batch-detail/enum/inward-type.enum';

@Pipe({
  name: 'inwardTypeEnum',
  standalone: true,
})
export class InwardTypeEnumPipe implements PipeTransform {
  transform(value: InwardTypeEnum): string {
    let msg = '';
    switch (value) {
      case InwardTypeEnum.DIRECT_INWARD:
        msg = 'Direct Inward';
        break;
      case InwardTypeEnum.FILE_BASED:
        msg = 'File Based';
        break;
    }
    return msg;
  }
}
