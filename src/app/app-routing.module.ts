import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdzPageNotFoundComponent} from "./Pages/adz-page-not-found/adz-page-not-found.component";
import {AdzHomeComponent} from "./Pages/adz-home/adz-home.component";
import {AdzSearchComponent} from "./Pages/adz-search/adz-search.component";


const routes: Routes = [
  {path: '', component: AdzHomeComponent },
  {path: 'search', component: AdzSearchComponent },
  {path: '',   redirectTo: '/', pathMatch: 'full' },

  // otherwise redirect to page not found
  {path: '**', component: AdzPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
