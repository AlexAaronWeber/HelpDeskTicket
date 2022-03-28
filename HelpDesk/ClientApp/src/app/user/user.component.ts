import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users:User[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response:User[]) => {
      this.users = response;
      console.log(response);
    })
  }

}
