export class BreadCrumb {
  title!: string;
  routeLink = '';
  public constructor(init?: Partial<BreadCrumb>) {
    Object.assign(this, init);
  }
}
