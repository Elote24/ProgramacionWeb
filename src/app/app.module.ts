import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { ClimaComponent } from './clima/clima.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalizacionComponent,
    ClimaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
