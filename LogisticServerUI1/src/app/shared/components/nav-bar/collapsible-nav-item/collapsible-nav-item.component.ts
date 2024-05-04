import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../models/view/navbar-item.model';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-collapsible-nav-item',
  standalone: true,
  templateUrl: './collapsible-nav-item.component.html',
  styleUrl: './collapsible-nav-item.component.scss',
  imports: [NavItemComponent],
})
export class CollapsibleNavItemComponent {
  private _navbarItem!: NavbarItem;
  collapseId = '';
  levelClass = '';
  parentClass = '';
  @Input() set navbarItem(value: NavbarItem) {
    this.levelClass = this.getLevelClass(value.level);
    this.collapseId = 'id' + Math.random().toString(36).substring(5);
    this.parentClass = value.isFirstLevel ? 'side-nav-link' : '';
    this._navbarItem = value;
  }
  get navbarItem() {
    return this._navbarItem;
  }

  getLevelClass(level: number): string {
    switch (level) {
      case 2:
        return 'side-nav-third-level';
      case 3:
        return 'side-nav-forth-level';
    }
    return 'side-nav-second-level';
  }
}
