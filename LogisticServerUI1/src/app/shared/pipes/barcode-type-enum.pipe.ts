/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { BarcodeTypeEnum } from '../models/entities/product/enum/barcode-type.enum';

@Pipe({
  name: 'barcodeTypeEnum',
  standalone: true,
})
export class BarcodeTypeEnumPipe implements PipeTransform {
  transform(barcodeType: BarcodeTypeEnum): string {
    let msg = '';
    switch (barcodeType) {
      case BarcodeTypeEnum.TWOD:
        msg = '2D';
        break;
      case BarcodeTypeEnum.SSCC:
        msg = 'SSCC';
        break;
    }
    return msg;
  }
}
