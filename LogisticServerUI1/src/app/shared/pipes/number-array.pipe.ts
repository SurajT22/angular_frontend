import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberArray',
  standalone: true,
})
export class NumberArrayPipe implements PipeTransform {
  transform(startIndex: number, endIndex: number): number[] {
    const array: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      array.push(i);
    }
    return array;
  }
}
