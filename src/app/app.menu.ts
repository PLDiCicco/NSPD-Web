

import { MenuItem } from "../framework/services/menu.service";

export let initialMenuItems: Array<MenuItem> = [
  {
    text: "Home",
    icon: 'glyphicon-home',
    route: '/homepage',
    submenu: null
  },
  {
    text: 'About Us',
    icon: 'glyphicon-flag',
    route: null,
    submenu: [{text: "Chief's Message"        , icon:'glyphicon-flag', route: '/chiefmessage'   , submenu:null},
              {text: "Staff"                  , icon:'glyphicon-flag', route: '/commandstaff'   , submenu:null},
              {text: "Detective Division"     , icon:'glyphicon-flag', route: '/detective'      , submenu:null},
              {text: "Prosecution Unit"       , icon:'glyphicon-flag', route: '/prosecution'    , submenu:null},
              {text: "Units in Service"       , icon:'glyphicon-flag', route: '/unitsinservice' , submenu:null},
              {text: "News"                   , icon:'glyphicon-flag', route: '/news'           , submenu:null},
              {text: "History"                , icon:'glyphicon-flag', route: '/history'        , submenu:null},
             ]
  },
  {
    text: "Services",
    icon: 'glyphicon-star',
    route: null,
    submenu: [{text: "Background Checks"    , icon:'glyphicon-star', route: '/backgroundchecks', submenu:null},
              {text: "Fingerprinting"       , icon:'glyphicon-star', route: '/fingerprinting'  , submenu:null},
              {text: "Code Red"             , icon:'glyphicon-star', route: '/codered'         , submenu:null},
             ]
  },
  {
    text: 'Public',
    icon: 'glyphicon-wrench',
    route: null,
    submenu: [{text: "Police Logs"              , icon:'glyphicon-wrench', route: '/policelogs'    , submenu:null},
              {text: "Police Reports"           , icon:'glyphicon-wrench', route: '/policereports' , submenu:null},
              {text: "Forms"                    , icon:'glyphicon-wrench', route: '/linksforms'    , submenu:null},
              {text: "Registered Sex Offenders" , icon:'glyphicon-wrench', route: '/sexoffenders'  , submenu:null},
              {text: "Contact Us"               , icon:'glyphicon-wrench', route: '/contactus'     , submenu:null},
             ]
  },
  {
    text: 'Information',
    icon: 'glyphicon-bookmark',
    route: null,
    submenu: [{text: "Equal Opportunity Posters"      , icon:'glyphicon-bookmark', route: '/eoposters'           , submenu:null},
              {text: "IBPO Contract and Ammendments"  , icon:'glyphicon-bookmark', route: '/ibpocontract'        , submenu:null},
              {text: "Police Sponsored Organizations" , icon:'glyphicon-bookmark', route: '/policeorganizations' , submenu:null},
              {text: "Frequently Asked Questions"     , icon:'glyphicon-bookmark', route: '/faq'                 , submenu:null},
              {text: "Links"                          , icon:'glyphicon-bookmark', route: null                   , submenu:[{text: "Town Sites"    , icon:'glyphicon-bookmark', route: '/links/town'   , submenu:null},
                                                                                                                            {text: "State Sites"   , icon:'glyphicon-bookmark', route: '/links/state'  , submenu:null},
                                                                                                                            {text: "Federal Sites" , icon:'glyphicon-bookmark', route: '/links/federal', submenu:null},
                                                                                                                            {text: "Miscellaneous" , icon:'glyphicon-bookmark', route: '/links/misc'   , submenu:null}
                                                                                                                           ]
              },
             ]
  },

];
