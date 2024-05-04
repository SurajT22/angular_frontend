/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { StationTypeEnum } from '../models/common/enums/station-type.enum';

@Pipe({
  name: 'stationTypeEnum',
  standalone: true,
})
export class StationTypeEnumPipe implements PipeTransform {
  transform(value: StationTypeEnum): string {
    let msg = '';
    switch (value) {
      case StationTypeEnum.CARTON:
        msg = 'Carton';
        break;
      case StationTypeEnum.SHIPPER:
        msg = 'Shipper';
        break;
      case StationTypeEnum.PALLET:
        msg = 'Pallet';
        break;
    }
    return msg;
  }
}
