import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-adz-search',
  templateUrl: './adz-search.component.html',
  styleUrls: ['./adz-search.component.css']
})
export class AdzSearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  @Input() listBooks: any[] = [];
  @Input() bookFilter: any = { authors: '', title: '', categories: '', language: ''};
  ngOnInit() {
  }

  // public navigate(url, id) {
  //   this.router.navigate([url, id]).then( (e) => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }

}
