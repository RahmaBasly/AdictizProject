import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adz-recherche',
  templateUrl: './adz-recherche.component.html',
  styleUrls: ['./adz-recherche.component.css']
})
export class AdzRechercheComponent implements OnInit {


  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  public navigate(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
