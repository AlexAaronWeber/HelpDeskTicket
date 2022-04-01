import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favticket } from '../favticket';
import { FavticketService } from '../favticket.service';

@Component({
  selector: 'app-favticket',
  templateUrl: './favticket.component.html',
  styleUrls: ['./favticket.component.css']
})
export class FavticketComponent implements OnInit {

  favTickets:Favticket[] = [];
  constructor(private favTicketService:FavticketService, private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.favTicketService.getAllFavTickets().subscribe((response:Favticket[]) => {
      this.favTickets = response;
      console.log(response)
    })
  }

  UnBookmarkFavTicket(ticketId:number){
    let index: number = this.favTickets.findIndex(t => t.id == ticketId);
    this.favTickets.splice(index, 1)
    this.favTicketService.UnBookmarkFavTicket(ticketId).subscribe((response:any) => {
      console.log(response)
      this.favTickets.splice(ticketId,1)
    })
  }
}
