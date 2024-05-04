import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePair } from '../models/view/key-value-pair.model';

@Pipe({
  name: 'hrfString',
  standalone: true,
})
export class HrfStringPipe implements PipeTransform {
  transform(hrf: KeyValuePair): string {
    return `${hrf.Name}_${hrf.Value}`;
  }
}
