import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'framework-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
