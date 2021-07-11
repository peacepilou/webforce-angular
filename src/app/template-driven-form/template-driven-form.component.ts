import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  // Je déclare ma propriété 'order' et je l'instancie.
  // Les valeurs que je donne à l'instanciation n'ont pas d'importance car elles vont être remplacées à la saisie
  // du formulaire via la directive en Two-Way Binding [ngModel]

  order: Order = new Order('', 0, new Date(), '');
  orderList: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // dans un cas réel, les commandes seraient poussées vers un backend #deliveroo
    this.orderList.push(this.order);
  }
}
