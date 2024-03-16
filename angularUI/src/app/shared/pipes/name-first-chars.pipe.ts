/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFirstChars',
  standalone: true,
})
export class NameFirstCharsPipe implements PipeTransform {
  transform(user: any): string {
    return [user?.firstName, user?.lastName]
      .filter(Boolean)
      .map((s) => s.trim().charAt(0))
      .join('');
  }
}
