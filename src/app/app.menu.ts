

import { MenuItem } from "../framework/services/menu.service";

export let initialMenuItems: Array<MenuItem> = [
  {
    text: "Chief's Message",
    icon: 'glyphicon-dashboard',
    route: '/chief',
    submenu: null
  },
  {
    text: 'Command Staff',
    icon: 'glyphicon-flag',
    route: '/command',
    submenu: null
  },
  {
    text: 'Links & Forms',
    icon: 'glyphicon-wrench',
    route: '/links',
    submenu: null
  },
  {
    text: 'Information',
    icon: 'glyphicon-wrench',
    route: '/about',
    submenu: null
  },

];
