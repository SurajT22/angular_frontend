export class PaginationBase {
  page = 1;
  size = 10;

  setPageNumber(page: string): void {
    const number = parseInt(page);
    this.page = isNaN(number) ? 1 : Math.abs(number);
  }
}
