import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from "./services/screen.service";

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StatusbarComponent } from "./statusbar/statusbar.component";
import { ScreenSmall } from "framework/directives/screenSmall.directive";
import { ScreenLarge } from "framework/directives/screenLarge.directive";
import { MenuService } from "framework/services/menu.service";
import { MenuComponent } from "framework/menus/menu/menu.component";
import { MenuItemComponent } from "framework/menus/menu-item/menu-item.component";
import { PopupMenuComponent } from "framework/menus/popup-menu/popup-menu.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitlebarComponent,
    TopbarComponent,
    StatusbarComponent,
    MenuComponent,
    MenuItemComponent,
    ScreenLarge,
    ScreenSmall,
    PopupMenuComponent   
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FrameworkModule { }
