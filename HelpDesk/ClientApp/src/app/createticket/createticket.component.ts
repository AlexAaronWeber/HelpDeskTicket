import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../user';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  @Output() result = new EventEmitter<Ticket>();

  constructor(private ticketService:TicketService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  addTicket(form:NgForm){
    if(this.loginService.getLogin() != null){
      let NewTitle:string = form.form.value.title;
      let NewQuestion:string = form.form.value.question;
      let NewUserId:number = this.loginService.getLogin().id;
      let NewUser:User = this.loginService.getLogin();
      let NewTicket:Ticket = {
      title: NewTitle,
      question: NewQuestion,
      userId: NewUserId,
      id: 0,
      user: NewUser,
      favTickets: []
    };
    this.ticketService.CreateTicket(NewTicket).subscribe((response:any) => {
      console.log("Ticket has been added");
      console.log(response)
      this.result.emit(response);
    });
    }
    else{
      this.router.navigate(["/login"])
    }
  }

}
