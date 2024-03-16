/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  standalone: true,
})
export class FullNamePipe implements PipeTransform {
  transform(user: any): string {
    return [user?.firstName, user?.lastName].filter(Boolean).join(' ');
  }
}
