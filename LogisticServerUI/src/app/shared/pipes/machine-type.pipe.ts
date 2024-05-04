import { Pipe, PipeTransform } from '@angular/core';
import { MachineTypeEnum } from '../models/entities/machine/enum/machine-type.enum';

@Pipe({
  name: 'machineType',
  standalone: true,
})
export class MachineTypePipe implements PipeTransform {
  transform(value: MachineTypeEnum): string {
    let machineType = '';
    switch (value) {
      case MachineTypeEnum.NONE:
        machineType = 'None';
        break;
      case MachineTypeEnum.COMPRESSION:
        machineType = 'Compression';
        break;
    }
    return machineType;
  }
}
