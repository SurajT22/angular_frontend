/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import $ from 'jquery';
import { NavbarItem } from '../../models/view/navbar-item.model';
import { NavItemComponent } from './nav-item/nav-item.component';
import { CollapsibleNavItemComponent } from './collapsible-nav-item/collapsible-nav-item.component';
import { UserServerPermissionEnum } from '../../models/entities/user/enums/user-server-permission.enum';
import { AuthService } from '../../../core/services/auth.service';

export declare function funSidebarInit(): any;
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavItemComponent,
    CollapsibleNavItemComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  authService = inject(AuthService);
  _navbarItems!: NavbarItem[];
  navSetTimeCounter = 0;
  @Input() set navbarItems(value: NavbarItem[]) {
    this._navbarItems = value;
    this.setSidebarUI();
  }
  get navbarItems() {
    return this._navbarItems;
  }

  filterNavbarItems!: NavbarItem[];

  // constructor() {
  //   setTimeout(() => {
  //     this.setSidebarUI();
  //   }, 1000);
  // }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  setSidebarUI() {
    this.setSidebarNavItem();
    if (typeof funSidebarInit === 'function') {
      funSidebarInit();
    }
    this.setCollasibleNavItemUI();
  }

  setSidebarNavItem(): void {
    if (this.authService.IsSuperAdmin) {
      this.filterNavbarItems = this.navbarItems;
      return;
    }
    const permissions = this.authService.getUserPermissions();
    const hasPermission = (permissionType: UserServerPermissionEnum): boolean | undefined =>{
      switch (permissionType) {
        case UserServerPermissionEnum.CLIENT_REGISTRATION:
          return permissions?.ClientRegistration;
        case UserServerPermissionEnum.BATCH_DETAILS:
          return permissions?.BatchDetail;
        case UserServerPermissionEnum.AUDIT_REPORT:
          return permissions?.AuditReport;
        case UserServerPermissionEnum.PRODUCTION_REPORT:
          return permissions?.ProductionReport;
        case UserServerPermissionEnum.SYSTEM_SETTINGS:
          return permissions?.SystemSettings;
        case UserServerPermissionEnum.SERVER_SETTINGS:
          return permissions?.ServerSettings;
        case UserServerPermissionEnum.USER_MANAGEMENT:
          return permissions?.UserManagement;
        case UserServerPermissionEnum.THIRDPARTY_SETTINGS:
          return permissions?.ThirdPartySettings;
        case UserServerPermissionEnum.HELP:
          return permissions?.Help;
        default:
          return true;
      }
    }

    const getNavbarList = (navItems: NavbarItem[]) => {
      const navbarLst: NavbarItem[] = [];
      navItems.forEach((nav) => {
        if (nav.children.length > 0) {
          const lst = getNavbarList(nav.children);
          if (lst.length > 0) {
            nav.children = lst;
            navbarLst.push(nav);
          }
        } else if (
          nav.permission == UserServerPermissionEnum.OPEN_FOR_ALL || hasPermission(nav.permission)
        )
          navbarLst.push(nav);
      });
      return navbarLst;
    };
    this.filterNavbarItems = getNavbarList(
      JSON.parse(JSON.stringify(this.navbarItems)),
    );
  }

  setCollasibleNavItemUI() {
    $(document).ready(() => {
      this.collasibleNavItem();
    });
  }

  collasibleNavItem() {
    this.navSetTimeCounter++;
    const activeTag = $('.side-nav').find('li a.active');
    if (activeTag.length > 0) {
      this.navSetTimeCounter = 0;
      const parentTag = $(activeTag).parents('li.side-nav-item div.collapse');
      parentTag.addClass('show');
      parentTag.siblings().attr('aria-expanded', 'true');
    } else {
      if (this.navSetTimeCounter > 3) {
        this.navSetTimeCounter = 0;
        return;
      }
      setTimeout(() => {
        this.collasibleNavItem();
      }, 200);
    }
  }

  
}
