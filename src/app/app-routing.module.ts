import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzRechercheComponent} from '../app/adz-recherche/adz-recherche.component';
import {AdzResultatComponent} from '../app/adz-resultat/adz-resultat.component';

const routes: Routes = [
  {path: '', component:AdzRechercheComponent },
  {path: 'resultat/:q', component:AdzResultatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
