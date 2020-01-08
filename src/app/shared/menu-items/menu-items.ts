import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}


const MENUITEMS = [
  { state: 'dashboard', name: 'Assignatures', type: 'link', icon: 'class'}
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
