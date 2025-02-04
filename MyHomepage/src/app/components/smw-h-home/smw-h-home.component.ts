import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Card } from '../../models/card.model';
import { Link } from '../../models/link.model';

@Component({
  selector: 'smw-h-home',
  standalone: false,

  templateUrl: './smw-h-home.component.html',
  styleUrl: './smw-h-home.component.css'
})
export class SmwHHomeComponent {
  cards: Card[]=[];
  constructor() {
    this.cards.push(new Card("Projekte", "", ["Hier sind ein Paar meiner Projekte"], new Link("/Projects",false)))
    //this.cards.push(Card.newone("Projekte", "", "Hier sind \nein Paar meiner \nProjekte", "/"))
  }

}
