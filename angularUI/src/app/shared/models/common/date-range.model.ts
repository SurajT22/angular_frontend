export class DateRange {
  start!: Date;
  end!: Date;

  public constructor(init?: Partial<DateRange>) {
    Object.assign(this, init);
  }

  parse(stringRange: string): DateRange {
    if (!stringRange) return this;
    const range = stringRange.split('-');
    if (range.length != 2) return this;
    const start = range[0].split('_');
    if (start.length != 3) return this;
    const end = range[1].split('_');
    if (end.length != 3) return this;

    this.start = new Date(
      new Date(
        new Date().setFullYear(
          parseInt(start[2]),
          parseInt(start[1]) - 1,
          parseInt(start[0])
        )
      ).setHours(0, 0, 0)
    );

    this.end = new Date(
      new Date(
        new Date().setFullYear(
          parseInt(end[2]),
          parseInt(end[1]) - 1,
          parseInt(end[0])
        )
      ).setHours(23, 59, 59)
    );
    return this;
  }

  //To string date range - dd_MM_yyyy-dd_MM_yyy format
  toString(): string {
    if (!this.start && !this.end) return '';
    return `${this.convertDate(this.start)}-${this.convertDate(this.end)}`;
  }

  convertDate(date: Date) {
    function str(s: number) {
      return s < 10 ? `0${s}` : s;
    }
    const d = date;
    return [str(d.getDate()), str(d.getMonth() + 1), d.getFullYear()].join('_');
  }

  isValidRange() {
    return this.start && this.end && this.end >= this.start;
  }
}
