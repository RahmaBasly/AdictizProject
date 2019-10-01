import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzRechercheComponent} from './Pages/adz-recherche/adz-recherche.component';
import {AdzResultatComponent} from './Pages/adz-resultat/adz-resultat.component';
import {PageNotFoundComponent} from "./Pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'recherche', component:AdzRechercheComponent },
  {path: 'resultat/:q', component:AdzResultatComponent },
  {path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
