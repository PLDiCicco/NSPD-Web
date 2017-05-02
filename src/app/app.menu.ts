

import { MenuItem } from "../framework/services/menu.service";

export let initialMenuItems: Array<MenuItem> = [
  {
    text: "Home",
    icon: 'glyphicon-home',
    route: '/homepage',
    submenu: null
  },
  {
    text: "Chief's Message",
    icon: 'glyphicon-star',
    route: '/chiefmessage',
    submenu: null
  },
  {
    text: 'Staff',
    icon: 'glyphicon-flag',
    route: '/commandstaff',
    submenu: null
  },
  {
    text: 'Forms',
    icon: 'glyphicon-wrench',
    route: '/linksforms',
    submenu: null
  },
  {
    text: 'Information',
    icon: 'glyphicon-bookmark',
    route: '/information',
    submenu: null
  },

];
