import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  datePipe = inject(DatePipe);
  transform(value: string | Date): string {
    if (!value) {
      return 'N/A';
    }
    const date = this.datePipe.transform(value, 'dd MMM yyyy');
    return date ? date : 'N/A';
  }
}
