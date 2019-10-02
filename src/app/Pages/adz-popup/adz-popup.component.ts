import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {BookItem} from "../../Models/BookItem";

@Component({
  selector: 'app-adz-popup',
  templateUrl: './adz-popup.component.html',
  styleUrls: ['./adz-popup.component.css']
})
export class AdzPopupComponent implements OnInit {

  @Input() book = new BookItem();
  @Input() listBooks: BookItem[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    return this.getBookById;
  }

  getBookById(book: BookItem) {
    this.book = this.listBooks.find(x => x.id === book.id);
    return this.book;
  }
}
