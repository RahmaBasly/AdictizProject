import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  return new TranslateHttpLoader(http);
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzHomeComponent } from './Pages/adz-home/adz-home.component';
import { AdzSearchComponent } from './Pages/adz-search/adz-search.component';
import { AdzPageNotFoundComponent } from './Pages/adz-page-not-found/adz-page-not-found.component';
import { SearchPipe } from './Pipes/search.pipe';
import { LanguagePipe } from './Pipes/language.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AdzHomeComponent,
    AdzSearchComponent,
    AdzPageNotFoundComponent,
    SearchPipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
