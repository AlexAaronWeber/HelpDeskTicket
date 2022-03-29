import { Component, OnInit } from '@angular/core';
import { Favticket } from '../favticket';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets:Ticket[] = [];
  userId:number = 1;
  constructor(private ticketService:TicketService) { }


  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((response:Ticket[]) => {
      this.tickets = response;
      console.log(response);
    })    
  }

  DeleteTicket(ticketId: number):void{
    this.ticketService.DeleteTicket(ticketId).subscribe((response:any) => {
      console.log(response);
      this.tickets.splice(ticketId,1);
    })
  }

  BookmarkTicket(ticketId:number):any{
    this.ticketService.BookmarkTicket(ticketId, this.userId).subscribe((response:any) => {
      console.log(response);
    })
    
  }

}
