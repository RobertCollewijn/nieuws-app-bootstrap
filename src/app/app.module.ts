import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from "./app.router";

import {AppComponent} from './app.component';
import {NieuwsItemsService} from "./services/nieuws-items.service";
import {NieuwsItemsComponent} from './components/nieuws-items/nieuws-items.component';
import {NieuwsItemComponent} from './components/nieuws-item/nieuws-item.component';
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NieuwsItemsComponent,
    NieuwsItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,

  ],
  providers: [NieuwsItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
