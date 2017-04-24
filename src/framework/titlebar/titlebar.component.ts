import { Component, OnInit } from '@angular/core';
import { ScreenService } from "../services/screen.service";

@Component({
  selector: 'framework-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  constructor(public screenService: ScreenService) { }

  ngOnInit() {
  }

}
