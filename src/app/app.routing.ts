import { Routes } from '@angular/router';

import { HomepageComponent } from "app/homepage/homepage.component";
import { ChiefmessageComponent } from "app/chiefmessage/chiefmessage.component";
import { CommandstaffComponent } from "app/commandstaff/commandstaff.component";
import { InformationComponent } from "app/information/information.component";
import { LinksformsComponent } from "app/linksforms/linksforms.component";

export const appRoutes: Routes = [
  {path: 'homepage'    , component: HomepageComponent },
  {path: 'chiefmessage', component: ChiefmessageComponent },
  {path: 'commandstaff', component: CommandstaffComponent },
  {path: 'information' , component: InformationComponent },
  {path: 'linksforms'  , component: LinksformsComponent },
  {path: ''            , component: HomepageComponent },
  {path: '**'          , component: HomepageComponent },
  

]