import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../constants/menu-item.constant';
import { MenuItem } from '../../models/menu-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private router: Router) {}

  public onNavigate(link: string): void {
    this.router.navigate([link]);
  }
}
