import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adz-resultat',
  templateUrl: './adz-resultat.component.html',
  styleUrls: ['./adz-resultat.component.css']
})
export class AdzResultatComponent implements OnInit {

  param: number ;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params.q;
      console.log(params['q']);
    });
  }


}
