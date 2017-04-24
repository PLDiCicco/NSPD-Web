import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from "./services/screen.service";

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StatusbarComponent } from "./statusbar/statusbar.component";
import { ScreenSmall } from "framework/directives/screenSmall.directive";
import { ScreenLarge } from "framework/directives/screenLarge.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitlebarComponent,
    TopbarComponent,
    StatusbarComponent,
    ScreenLarge,
    ScreenSmall   
  ],
  providers: [
    FrameworkConfigService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FrameworkModule { }
