import { Component, OnInit } from '@angular/core';
import { MenuService } from "framework/services/menu.service";
import { ScreenService } from "framework/services/screen.service";

@Component({
  selector: 'framework-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private menuService:MenuService,
              private screenService: ScreenService) { }

  ngOnInit() {
  }

}
