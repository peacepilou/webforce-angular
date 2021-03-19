import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = {
    name: 'John',
    picture: '/assets/john-doe.png',
    age: 25,
    quote: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
