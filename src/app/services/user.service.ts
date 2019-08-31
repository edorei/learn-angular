import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;
  constructor() { 
    this.users = [
      {
        firstName: 'Vinod',
        lastName: 'Sharma',
        age: 32,
        address: {
            street: '3rd',
            city: 'Bangalore',
            state: 'KA'
          },
          img: 'http://lorempixel.com/175/175/people/3',
          isActive: true,
          balance: 130,
          registered: new Date(),
          email: 'vinod@gmail.com',
          hide: true
      },
      {
          firstName: 'Ranjana',
          lastName: 'Sharma',
          age: 32,
          address: {
              street: '3rd',
              city: 'Bangalore',
              state: 'KA'
          },
          img: 'http://lorempixel.com/175/175/people/2',
          isActive: true,
          balance: 100,
          registered: new Date(),
          email: 'ranjana@gmail.com',
          hide: true
      },
      {
        firstName: 'Ishank',
        lastName: 'Sharma',
        age: 32,
        address: {
            street: '3rd',
            city: 'Bangalore',
            state: 'KA'
          },
          img: 'http://lorempixel.com/175/175/people/1',
          isActive: true,
          balance: 165,
          registered: new Date(),
          email: 'ishank@gmail.com',
          hide: true
      }
        ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user:User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
    return this.data;
  }
}
