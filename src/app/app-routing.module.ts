import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzRechercheComponent} from '../app/adz-recherche/adz-recherche.component';
import {AdzResultatComponent} from '../app/adz-resultat/adz-resultat.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'recherche', component:AdzRechercheComponent },
  {path: 'resultat/:q', component:AdzResultatComponent },
  { path: '',   redirectTo: '/recherche', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
