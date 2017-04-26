import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrameworkModule } from '../framework/framework.module';
import { ChiefmessageComponent } from './chiefmessage/chiefmessage.component';
import { CommandstaffComponent } from './commandstaff/commandstaff.component';
import { LinksformsComponent } from './linksforms/linksforms.component';
import { InformationComponent } from './information/information.component'

@NgModule({
  declarations: [
    AppComponent,
    ChiefmessageComponent,
    CommandstaffComponent,
    LinksformsComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
