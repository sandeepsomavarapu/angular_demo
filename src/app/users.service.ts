import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user:User;
  constructor() {

  }

  getUser():User {
    this.user=new User(123,"mahesh",94949494,"mahesh@gmail");
    return this.user;
  }

}
export class User {
  userid: number;
  username: string;
  contact: number;
  email: string;
  constructor(userid, username, contact, email) {
    this.userid = userid;
    this.username = username;
    this.contact = contact;
    this.email = email;
  }
}