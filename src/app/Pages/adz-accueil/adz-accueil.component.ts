import {Component, OnInit, ViewChild} from '@angular/core';
import {AdzRechercheComponent} from "../adz-recherche/adz-recherche.component";

@Component({
  selector: 'app-adz-accueil',
  templateUrl: './adz-accueil.component.html',
  styleUrls: ['./adz-accueil.component.css']
})
export class AdzAccueilComponent implements OnInit {
  Items: any[];

  @ViewChild('child', {static: false}) Component

  constructor() { }

  ngOnInit() {
  }


}
