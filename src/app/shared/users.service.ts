import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() {
    this.users.push(
      {
        name: 'John',
        picture: '/assets/users/user-john.jpg',
        age: 42,
        quote: 'No idea',
        id: 1
      },
      {
        name: 'Margerite',
        picture: '/assets/users/user-margerite.jpg',
        age: 22,
        quote: 'Still no idea',
        id: 2
      },
      {
        name: 'Alicia',
        picture: '/assets/users/user-alicia.jpg',
        age: 19,
        quote: 'No idea I promess',
        id: 3
      },
    )
   }

   getAllUsers(): User[] {
    return this.users;
   }

   getUser(id: number): User {
     const user = this.users.find(user => user.id === id);
     return user as User;
   }
}
