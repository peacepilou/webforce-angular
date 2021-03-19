import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  isVital: boolean = true;
  isAdmin: boolean = true;
  animals: string[] = ['fish', 'shark', 'sheep'];

  constructor() { }

  ngOnInit(): void {
  }
  
  switchAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
