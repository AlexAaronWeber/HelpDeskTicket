import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    this.userService.login(form.form.value.username, form.form.value.password).subscribe((response:User)=>{
      console.log(response)
        if(response != null){
          this.loginService.login(response);
        }
    });
  }

  logout(){
    this.loginService.logout();
  }

  isLoggedIn():boolean{
    if (this.loginService.getLogin()== null){
      return false;
    }
    else{
      return true;
    }
  }

}
