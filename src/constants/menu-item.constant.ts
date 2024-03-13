import { MenuItem } from "../models/menu-item.model";

export const MENU_ITEMS: MenuItem[] = [
  { iconName: 'home', buttonName: 'Home', pathName: 'home' },
  { iconName: 'list', buttonName: 'Heroes List', pathName: 'heroes' },
  { iconName: 'add', buttonName: 'Create Hero', pathName: 'hero/new' },
  { iconName: 'group', buttonName: 'Contact Us', pathName: 'contact-us' },
];
