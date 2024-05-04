import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePair } from '../models/view/key-value-pair.model';
import { HRF_IDENTIFIERS } from '../models/common/const/hrf-identifiers.const';

@Pipe({
  name: 'hrfKeyValue',
  standalone: true,
})
export class HrfKeyValuePipe implements PipeTransform {
  transform(hrf: string): KeyValuePair{
    var items =  hrf.split("_", 2);
    return new KeyValuePair({ Name: items[0], Value: items[1]});
  }
}
