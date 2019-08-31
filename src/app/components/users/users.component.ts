import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

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
  data: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });
    //this.users = this.dataService.getUsers();
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
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
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '20px'
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

  onSubmit( {value, valid}: {value: User, valid: boolean} ) {
    console.log( value );
    value.registered = new Date();
    if ( !valid ) {
    } else {
      value.isActive = true;
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
