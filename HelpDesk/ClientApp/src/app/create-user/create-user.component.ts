import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  addUser(form:NgForm){
    let NewName:string = form.form.value.name;
    let NewEmail:string = form.form.value.email;
    let NewUser:User = {
      id: 0,
      name: NewName,
      email: NewEmail,
      favTickets: [],
      ticketResponders: [],
      ticketUsers: []
    };
    this.userService.addUser(NewUser).subscribe((response:any) => {
      console.log("Ticket has been added");
      console.log(response)
    
  });
}
  
}
