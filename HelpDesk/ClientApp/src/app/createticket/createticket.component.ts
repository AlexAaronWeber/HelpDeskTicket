import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
  }

  addTicket(form:NgForm){
    let NewTitle:string = form.form.value.title;
    let NewQuestion:string = form.form.value.question;
    let NewUserId:number = form.form.value.userId; //remove in the future
    let NewTicket:Ticket = {
      title: NewTitle,
      question: NewQuestion,
      userId: NewUserId,
      id: 0,
      responderId: 0,
      resolution: '',
      responder: null,
      user: null,
      favTickets: []
    };
    this.ticketService.CreateTicket(NewTicket).subscribe((response:any) => {
      console.log("Ticket has been added");
      console.log(response)
    });
  }

}
