/* eslint-disable @typescript-eslint/no-explicit-any */
export class MenuBtnItem {
  title!: string;
  routeLink = '';
  iconClass = 'mdi mdi-plus-thick';
  clickFunction!: any;

  public constructor(init?: Partial<MenuBtnItem>) {
    Object.assign(this, init);
  }
}
