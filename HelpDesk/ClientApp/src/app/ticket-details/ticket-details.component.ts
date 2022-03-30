import { Component, OnInit } from '@angular/core';
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

  ResolveTicket(ticketId:number, resolution:string, responderId:number): void {
    if(this.loginService.getLogin() != null){
      let myUser:User = this.loginService.getLogin();
      this.ticketService.ResolveTicket(ticketId, resolution, responderId).subscribe((response: any) => {
        console.log(response)
      })
    }    
  }

}
