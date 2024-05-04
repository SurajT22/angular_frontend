/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { UidTypeEnum } from '../../../../../shared/models/entities/server-settings/enums/uid-type.enum';

@Pipe({
    name: 'uidTypeEnum',
    standalone: true,
})
export class UidTypeEnumPipe implements PipeTransform {
    transform(uidType: UidTypeEnum): string {
        let msg = '';
        switch (uidType) {
            case UidTypeEnum.AlphaNumeric:
                msg = 'AlphaNumeric';
                break;
            case UidTypeEnum.Numeric:
                msg = 'Numeric';
                break;
        }
        return msg;
    }
}
