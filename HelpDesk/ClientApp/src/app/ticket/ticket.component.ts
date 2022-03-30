import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    let index: number = this.tickets.findIndex(t => t.id == ticketId);
    this.tickets.splice(index, 1);
    this.ticketService.DeleteTicket(ticketId).subscribe((response:any) => {
      console.log(response);
      this.tickets.splice(ticketId,1);
    })
  }

  BookmarkTicket(ticketId:number):any{
    this.ticketService.BookmarkTicket(ticketId).subscribe((response:any) => {
      console.log(response);
    }) 
  }

  // ResolveTicket(ticketId:number, resolution:string, responderId:number){

  //   this.ticketService.ResolveTicket(ticketId, resolution, responderId).subscribe((response:any)=>{
  //     console.log(response);
  //   })
 // }


}
