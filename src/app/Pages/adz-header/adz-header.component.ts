import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-adz-header',
  templateUrl: './adz-header.component.html',
  styleUrls: ['./adz-header.component.css']
})
export class AdzHeaderComponent implements OnInit {

  constructor( private translate: TranslateService) { }

  ngOnInit() {
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
