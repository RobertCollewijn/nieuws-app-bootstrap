import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from "./app.router";
import {CKEditorModule} from "ng2-ckeditor";


import {AppComponent} from './app.component';
import {NieuwsItemsService} from "./services/nieuws-items.service";
import {NieuwsItemsComponent} from './components/nieuws-items/nieuws-items.component';
import {NieuwsItemComponent} from './components/nieuws-item/nieuws-item.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NieuwsItemsComponent,
    NieuwsItemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    CKEditorModule,

  ],
  providers: [NieuwsItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
