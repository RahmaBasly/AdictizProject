import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listBooks: any, term: any): any {
    if (term === undefined || term === '') {
      return listBooks;
    }

    return listBooks.filter(function (book) {
      if (book.volumeInfo.authors !== undefined && book.volumeInfo.publisher !== undefined) {
        let authors: any[] = [];
        authors = book.volumeInfo.authors;
        for (let i = 0; i < authors.length; i++) {
          //toLowerCase to can compare the two strings
          return book.volumeInfo.title.toLowerCase().includes(term.toLowerCase()) ||
            book.volumeInfo.publisher.toLowerCase().includes(term.toLowerCase()) ||
            authors[i].toLowerCase().includes(term.toLowerCase()) ||
            book.volumeInfo.categories == term
        }
      } else {
        return book.volumeInfo.title.toLowerCase().includes(term.toLocaleString()) ||
          book.volumeInfo.categories == term;
      }
    });
  }
}
