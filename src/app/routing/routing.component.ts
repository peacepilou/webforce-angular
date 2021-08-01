import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
  

}
