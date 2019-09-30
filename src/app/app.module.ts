import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzRechercheComponent } from './adz-recherche/adz-recherche.component';
import { AdzResultatComponent } from './adz-resultat/adz-resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    AdzRechercheComponent,
    AdzResultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
