import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzRechercheComponent } from './Pages/adz-recherche/adz-recherche.component';
import { AdzResultatComponent } from './Pages/adz-resultat/adz-resultat.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { RechercherlivrePipe } from './Pipes/rechercherlivre.pipe';
import { AdzAccueilComponent } from './Pages/adz-accueil/adz-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    AdzRechercheComponent,
    AdzResultatComponent,
    PageNotFoundComponent,
    RechercherlivrePipe,
    AdzAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
