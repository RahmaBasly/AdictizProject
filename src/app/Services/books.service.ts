import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BooksData} from "../Models/BooksData";
import * as Globals from './link';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http: HttpClient) { }

  getAllBooks(): Observable<BooksData> {
    return this.http.get<BooksData>(Globals.URL).pipe();
  }
}
