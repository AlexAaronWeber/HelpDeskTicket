import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Favticket } from '../favticket';
import { FavticketService } from '../favticket.service';
import { LoginService } from '../login.service';
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
  favTickets:Favticket[] = [];
  constructor(private ticketService:TicketService, private loginService:LoginService, private router:Router, private favTicketService: FavticketService) { }


  ngOnInit(): void {
    this.favTicketService.getAllFavTickets().subscribe((response:Favticket[]) => {
      this.favTickets= response;
    } )
    this.ticketService.getAllTickets().subscribe((response:Ticket[]) => {
      this.tickets = response;
      console.log(response);
    })    
  }

  DeleteTicket(ticketId: number):void{
    if(this.loginService.getLogin() != null){
      let index: number = this.tickets.findIndex(t => t.id == ticketId);
      this.tickets.splice(index, 1);
      this.ticketService.DeleteTicket(ticketId).subscribe((response:any) => {
        console.log(response);
        this.tickets.splice(ticketId,1);
      }) 
    }
    else{
      this.router.navigate(["/login"])
    }
  }

  BookmarkTicket(ticketId:number):any{
    if(this.loginService.getLogin() != null){
      this.ticketService.BookmarkTicket(ticketId).subscribe((response:any) => {
        console.log(response);
        this.favTickets.push(response);
      }) 
    }
    else{
      this.router.navigate(["/login"])
    }
  }

  isFavorited(ticket:Ticket):any{
    let index = this.favTickets.findIndex(t => t.ticketId == ticket.id)
    if (index == -1){
      return false;
    }
    else{
      return true;
    }

  }

  removeFavorite(ticket:Ticket){
    let index = this.favTickets.findIndex(t => t.ticketId==ticket.id);
    let result = this.favTickets[index];
    this.favTickets.splice(index,1);
    this.favTicketService.UnBookmarkFavTicket(result.id).subscribe((response:Favticket) => {
      console.log(response);

    })
  }

  addNewTicket(newT:Ticket){
    this.tickets.push(newT);
  }

  isLoggedIn(userId:number):boolean{
    if (this.loginService.getLogin().id != userId){
      return false;
    }
    else{
      
      return true;
    }
  }





  // ResolveTicket(ticketId:number, resolution:string, responderId:number){

  //   this.ticketService.ResolveTicket(ticketId, resolution, responderId).subscribe((response:any)=>{
  //     console.log(response);
  //   })
 // }


}
