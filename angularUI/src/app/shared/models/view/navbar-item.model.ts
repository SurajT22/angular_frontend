import { UserServerPermissionEnum } from '../entities/user/enums/user-server-permission.enum';

export class NavbarItem {
  routerLink: string[] = [];
  label = '';
  iconClass = '';
  level = 1;
  isFirstLevel = true;
  children: NavbarItem[] = [];
  permission!: UserServerPermissionEnum;
  public constructor(init?: Partial<NavbarItem>) {
    Object.assign(this, init);
  }
}
