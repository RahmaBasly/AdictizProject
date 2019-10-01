import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from "@angular/router";
import {ResultatService} from "./services/resultat.service";


@Component({
  selector: 'app-adz-resultat',
  templateUrl: './adz-resultat.component.html',
  styleUrls: ['./adz-resultat.component.css'],
  providers:[ResultatService]
})
export class AdzResultatComponent implements OnInit {

  param: number;
  listBooks: Object;

  constructor(private route: ActivatedRoute,
              private  router: Router,
              public service:ResultatService) {}


  ngOnInit() {
    //Récupération du paramétre envoyer en url
    this.route.params.subscribe(params => {
      this.param = params.q;
      console.log(params['q']);
    });

    this.service.getBooks().subscribe(
      data => {
        this.listBooks = data ;
        //Ngfor peut seulement lire à partir d'un Array
        //Conversion de listBooks de Object à Array
        this.listBooks = Array.of(this.listBooks);
        console.log(this.listBooks);
      }
    );
  }

}
