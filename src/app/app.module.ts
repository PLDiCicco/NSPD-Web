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
import { HomepageComponent } from './homepage/homepage.component'
import { appRoutes } from "app/app.routing";
import { DetectiveComponent } from './detective/detective.component';
import { ProsecutionComponent } from './prosecution/prosecution.component';
import { UnitsinserviceComponent } from './unitsinservice/unitsinservice.component';
import { NewsComponent } from './news/news.component';
import { HistoryComponent } from './history/history.component';
import { BackgroundchecksComponent } from './backgroundchecks/backgroundchecks.component';
import { FingerprintingComponent } from './fingerprinting/fingerprinting.component';
import { CoderedComponent } from './codered/codered.component';
import { PolicelogsComponent } from './policelogs/policelogs.component';
import { PolicereportsComponent } from './policereports/policereports.component';
import { SexoffendersComponent } from './sexoffenders/sexoffenders.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EopostersComponent } from './eoposters/eoposters.component';
import { IbpocontractComponent } from './ibpocontract/ibpocontract.component';
import { PoliceorganizationsComponent } from './policeorganizations/policeorganizations.component';
import { FaqComponent } from './faq/faq.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiefmessageComponent,
    CommandstaffComponent,
    LinksformsComponent,
    HomepageComponent,
    DetectiveComponent,
    ProsecutionComponent,
    UnitsinserviceComponent,
    NewsComponent,
    HistoryComponent,
    BackgroundchecksComponent,
    FingerprintingComponent,
    CoderedComponent,
    PolicelogsComponent,
    PolicereportsComponent,
    SexoffendersComponent,
    ContactusComponent,
    EopostersComponent,
    IbpocontractComponent,
    PoliceorganizationsComponent,
    FaqComponent,
    LinksComponent
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
