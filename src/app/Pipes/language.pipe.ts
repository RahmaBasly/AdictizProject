import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(listBooks: any, term: any): any {
    if (term === undefined || term === '') { return listBooks; }
    return listBooks.filter(function (book) {
      return book.volumeInfo.language == term;
    });
  }
}
