import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../framework/services/framework-config.service';
import { MenuService } from "../framework/services/menu.service";
import { initialMenuItems } from "./app.menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private frameworkConfigService: FrameworkConfigService,
              private menuService: MenuService) {
    
    let config:FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/facebook.png' , alt: 'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/googleplus.png' , alt: 'Google+', link: 'http://www.google.com'},
        {imageFile: 'assets/skype.png' , alt: 'Skype', link: 'http://www.skype.com'},
        {imageFile: 'assets/twitter.png' , alt: 'Twitter', link: 'http://www.twitter.com'},
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
    

  }

}
