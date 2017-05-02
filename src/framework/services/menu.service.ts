import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string,
  icon: string,
  route: string,
  submenu: Array<MenuItem>
}

@Injectable()
export class MenuService {
  items: Array<MenuItem>;
  isVertical = false;
  showMobileMenu = false;

  toggleMobileMenu() : void {
    this.isVertical = true;
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleMenuOrientation() : void{
    this.isVertical = !this.isVertical;
  }


}