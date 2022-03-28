import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets:Ticket[] = [];
  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((response:Ticket[]) => {
      this.tickets = response;
      console.log(response);
    })
  }

}
