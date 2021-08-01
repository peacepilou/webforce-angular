import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  
  text: string = 'Passer ce texte en Lower case'
  birthday: Date = new Date();
  amount: number = 70;

  constructor() { }

  ngOnInit(): void {
  }

}
