/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { BatchTypeEnum } from '../models/entities/product/enum/batch-type.enum';

@Pipe({
  name: 'batchTypeEnum',
  standalone: true,
})
export class BatchTypeEnumPipe implements PipeTransform {
  transform(value: BatchTypeEnum): string {
    let msg = '';
    switch (value) {
      case BatchTypeEnum.Serialization:
        msg = 'Serialization';
        break;
      case BatchTypeEnum.ParentChildOnline:
        msg = 'Parent Child Online';
        break;
      case BatchTypeEnum.LineIndependent:
        msg = 'Line Independent';
        break;
    }
    return msg;
  }
}
