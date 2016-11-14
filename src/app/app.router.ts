///<reference path="../../node_modules/@angular/router/src/config.d.ts"/>
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


import {NieuwsItemsComponent} from "./components/nieuws-items/nieuws-items.component";
import {NieuwsItemComponent} from "./components/nieuws-item/nieuws-item.component";



const initRoute = {
  path: '',
  redirectTo: '/nieuwsItems',
  pathMatch: 'full'
}

const defaultRoute = {
  path: '**',
  redirectTo: '/nieuwsItems',
  pathMatch: 'full'
}

const appRoutes: Routes = [

  {
    path: 'home',
    component: NieuwsItemsComponent
  },
  {
    path: 'nieuwsItems',
    component: NieuwsItemsComponent
  },
  {
    path: 'nieuwsItem',
    component: NieuwsItemComponent
  },

  initRoute,
  defaultRoute


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
