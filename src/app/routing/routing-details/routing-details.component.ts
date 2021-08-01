import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-routing-details',
  templateUrl: './routing-details.component.html',
  styleUrls: ['./routing-details.component.scss']
})
export class RoutingDetailsComponent implements OnInit {

  user: User = new User('', '', 0, '');

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUser(id);
  }

}
