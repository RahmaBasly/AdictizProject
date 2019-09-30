import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  urlBooks: string = 'https://www.googleapis.com/books/v1/volumes?q=1';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.urlBooks);
  }

}
