import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private loginService:LoginService){}

  isExpanded = false;
  loginText = "Log in";

  isLoggedIn():boolean{
    if(this.loginService.getLogin() == null){
      this.loginText = "Log in"
      return false;
    }
    else {
      this.loginText = "Log out"
      return true;
    }
  }
  
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
