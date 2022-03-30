import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Ticket } from './ticket';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  endpoint: string = "api/Ticket";
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private loginService:LoginService) { }

  getAllTickets():any{
    return this.http.get(this.baseUrl + "api/Ticket")
  }

  getById(id:number):any {
    return this.http.get(`${this.baseUrl}api/Ticket/ById/${id}`)
  }

  getByTitle(title:string):any {
    return this.http.get(`${this.baseUrl}api/Ticket/${title}`)
  }

  CreateTicket(ticket: Ticket){
    let fullUrl: string = this.baseUrl + this.endpoint;
    return this.http.post(fullUrl, ticket);
  }

  DeleteTicket(ticketId: number){
    
    return this.http.delete(`${this.baseUrl + this.endpoint}/delete/${ticketId}`);

  }

  ResolveTicket (ticketId:number, resolution:string, responderId:number){
    return this.http.patch(`${this.baseUrl}api/Ticket/resolve/${ticketId}?resolution=${resolution}&responderId=${responderId}`,{});
  }

  BookmarkTicket(ticketId:number){
    let myUser:User = this.loginService.getLogin();
    return this.http.post(`${this.baseUrl}api/FavTicket/Bookmark/${ticketId}&${myUser.id}`, {});
  }
}
