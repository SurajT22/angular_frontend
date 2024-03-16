import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../../models/view/navbar-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
  private _navbarItem!: NavbarItem;
  levelClass = '';
  @Input()
  set navbarItem(value: NavbarItem) {
    this._navbarItem = value;
    this.levelClass = value.isFirstLevel ? 'side-nav-link' : '';
  }
  get navbarItem() {
    return this._navbarItem;
  }
}
