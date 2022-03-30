import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../user';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
result:Ticket = {} as Ticket;
  constructor(private ticketService:TicketService, private route:ActivatedRoute, private loginService:LoginService) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.ticketService.getById(id).subscribe((response:Ticket)=>{
      this.result=response;
      console.log(response);
    });
  }

  ResolveTicket(ticketId:number, form:NgForm): void {
    if(this.loginService.getLogin() != null){
      let myUser:User = this.loginService.getLogin();
      this.ticketService.ResolveTicket(ticketId, form.form.value.answer, myUser.id).subscribe((response: any) => {
        console.log(response);
        this.result.resolution = form.form.value.answer;
      })
    }    
  }

}
