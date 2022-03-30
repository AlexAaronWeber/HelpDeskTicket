import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../user';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  constructor(private ticketService:TicketService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  addTicket(form:NgForm){
    if(this.loginService.getLogin() != null){
      let NewTitle:string = form.form.value.title;
      let NewQuestion:string = form.form.value.question;
      let NewUserId:number = this.loginService.getLogin().id;
      let NewTicket:Ticket = {
      title: NewTitle,
      question: NewQuestion,
      userId: NewUserId,
      id: 0,
      responderId: 0,
      resolution: '',
      responder: {} as User,
      user: {} as User,
      favTickets: []
    };
    this.ticketService.CreateTicket(NewTicket).subscribe((response:any) => {
      console.log("Ticket has been added");
      console.log(response)
    });
    }
    else{
      this.router.navigate(["/login"])
    }
  }

}
