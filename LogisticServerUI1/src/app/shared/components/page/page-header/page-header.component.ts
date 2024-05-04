/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuBtnItem } from '../../../models/view/menu-btn-item.model';
import { BreadCrumb } from '../../../models/view/breadcrumb.model';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  private _btnLink!: Array<string>;
  @Input() headerLabel!: string;
  @Input() btnLabel!: string;
  @Input() btnIcon = 'mdi mdi-plus-thick';
  @Input() btnVisible = false;
  @Input() breadCrumbs: BreadCrumb[] = [];
  @Input() navigateVisible = true;
  @Input() menuBtnItems: MenuBtnItem[] = [];
  @Input() set btnLink(value: Array<string>) {
    this._btnLink = value;
  }

  get btnLink() {
    return this._btnLink;
  }

  @Output() btnClick: EventEmitter<unknown> = new EventEmitter();

  router = inject(Router);

  onBtnClick() {
    this.btnClick.emit();
  }

  navigateBack() {
    window.history.back();
  }

  onBreadCums(routeLink: string): void {
    if (!routeLink) return;
    void this.router.navigateByUrl(routeLink);
  }

  onMenuClick(menu: MenuBtnItem): void {
    if (menu.clickFunction && typeof menu.clickFunction === 'function') {
      menu.clickFunction();
      return;
    }
    void this.router.navigateByUrl(menu.routeLink);
  }
}
