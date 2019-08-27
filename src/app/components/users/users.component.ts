import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    hide: false,
    email: '',
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended:boolean = false;
  loaded:boolean = true;
  enabledAdd:boolean = false;
  showUserFormToggel: boolean = false;
  currentClasses = {};
  currentStyles = {};
  @ViewChild('userForm') form: any;
  
  constructor() { }

  ngOnInit() {
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

        //this.users = [];
      //this.setCurrentClasses();
      //his.setCurrentStyle();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enabledAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyle() {
    this.currentStyles = {
      'padding-top': this.showExtended? '0' : '40px',
      'font-size': this.showExtended? '' : '20px'
    }
  }

   showUserForm(event: any) {
     this.showUserFormToggel = ! this.showUserFormToggel;
  }

  addUser() {
    this.user.registered = new Date();
    this.user.isActive = true;
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      hide: false,
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
      }
    }
  }

  toggelHide(user) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log("form submitted");
    console.log(value);
    console.log(valid);
    value.registered = new Date();
    if(!valid) {
      console.log("Invalid");
    } else {
      value.isActive = true;
      value.hide = true;
      console.log(value);
      this.users.unshift(value);
      this.form.reset();
    }
    event.preventDefault();
  }

}
