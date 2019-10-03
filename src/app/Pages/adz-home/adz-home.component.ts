import {Component, OnInit, ViewChild} from '@angular/core';
import {BookItem} from "../../Models/BookItem";
import {BooksService} from "../../Services/books.service";
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
import {AdzPopupComponent} from "../adz-popup/adz-popup.component";

@Component({
  selector: 'app-adz-home',
  templateUrl: './adz-home.component.html',
  styleUrls: ['./adz-home.component.css']
})
export class AdzHomeComponent  implements OnInit  {

  @ViewChild('child', {static: false}) Component

  public errorMsg;
  private bodyText: string;

  listBooks: BookItem[] = [];
  listCategories: any[] = [];
  listAuthors: any[] = [];
  bookFilter: any = {
    authors: '',
    title: '',
    categories: '',
    language: ''
  }

  constructor(private booksService:BooksService ,public dialog: MatDialog) { }
  ngOnInit() {

    this.booksService.getAllBooks().subscribe(
      data =>{
        //Get the list of all the books
        this.listBooks = data.items;

        //Get the categories of books
        for (let index = 0; index < data.items.length; index++) {
          const item = data.items[index];
          if (item.volumeInfo.categories) {
            this.listCategories.push(item.volumeInfo.categories[0]);
          }
          if(item.volumeInfo.authors){
            this.listAuthors.push(item.volumeInfo.authors);
          }
        }
        this.listCategories = Array.from(new Set(this.listCategories));
        this.listAuthors = Array.from(new Set(this.listAuthors));
      },
      error => this.errorMsg = error
    );
  }





  openModal(book: BookItem) {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdzPopupComponent, dialogConfig);
    dialogRef.componentInstance.book = book;
  }
}
