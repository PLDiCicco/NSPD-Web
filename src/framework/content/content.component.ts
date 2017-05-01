import { Component, OnInit } from '@angular/core';
import { MenuService } from "framework/services/menu.service";

@Component({
  selector: 'framework-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit() {
  }

}
