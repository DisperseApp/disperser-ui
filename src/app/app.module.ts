import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlacesSearchComponent } from './components/places-search/places-search.component';
import { ListDataService } from "./services/list-data/list-data.service";
import { LocationService } from "./services/location/location.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ListDataService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
