import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(login:User){
    localStorage.setItem('login', JSON.stringify(login));
  }

  getLogin():User{
    return JSON.parse(localStorage.getItem("login") + "");
  }

  logout(){
    localStorage.removeItem("login");
  }
}
