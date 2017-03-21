import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeocoderService } from './app.service.geocoder';
 

import { GeocoderComponet } from './app.component.geocoder';

@NgModule({
  declarations: [
    GeocoderComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GeocoderService],
  bootstrap: [GeocoderComponet]
})
export class AppModule { }
