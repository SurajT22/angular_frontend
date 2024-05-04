import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationCount',
  standalone: true,
})
export class PaginationCountPipe implements PipeTransform {
  transform(
    pageNumber: number,
    pageSize: number,
    totalRecords: number,
  ): unknown {
    const start = (pageNumber - 1) * pageSize + 1;
    let end = pageNumber * pageSize;
    end = end > totalRecords ? totalRecords : end;
    return `${start} - ${end} of ${totalRecords}`;
  }
}
