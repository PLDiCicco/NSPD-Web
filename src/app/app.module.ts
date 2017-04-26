import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FrameworkModule } from '../framework/framework.module';
import { ChiefmessageComponent } from './chiefmessage/chiefmessage.component';
import { CommandstaffComponent } from './commandstaff/commandstaff.component';
import { LinksformsComponent } from './linksforms/linksforms.component';
import { InformationComponent } from './information/information.component';
import { HomepageComponent } from './homepage/homepage.component'
import { appRoutes } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ChiefmessageComponent,
    CommandstaffComponent,
    LinksformsComponent,
    InformationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrameworkModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
