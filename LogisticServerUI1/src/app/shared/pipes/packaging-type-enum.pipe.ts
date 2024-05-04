/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { PackagingTypeEnum } from '../models/entities/batch-detail/enum/packaging-type.enum';

@Pipe({
  name: 'packagingTypeEnum',
  standalone: true,
})
export class PackagingTypeEnumPipe implements PipeTransform {
  transform(value: PackagingTypeEnum): string {
    let msg = '';
    switch (value) {
      case PackagingTypeEnum.HOMOGENEOUS:
        msg = 'Homogeneous';
        break;
      case PackagingTypeEnum.HETEROGENEOUS:
        msg = 'Heterogeneous';
        break;
    }
    return msg;
  }
}
