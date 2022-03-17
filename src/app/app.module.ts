import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';

import localES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { PaginasModule } from './paginas/paginas.module';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    BrowserAnimationsModule,
    SharedModule,
    ImageModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
