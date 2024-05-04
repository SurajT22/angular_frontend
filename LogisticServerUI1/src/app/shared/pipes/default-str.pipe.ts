import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultStr',
  standalone: true,
})
export class DefaultStrPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return this.isNullOrEmpty(value) ? 'N/A' : (value as string);
  }
  isNullOrEmpty(value: string | undefined): boolean {
    return !value || value == '';
  }
}
