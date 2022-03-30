import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  endpoint: string = "api/Ticket";
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

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

  // ResolveTicket(id:number, resolution:string, responderId:number){
  //   return this.http.put(`${this.baseUrl}api/Ticket/resolve/${id}?resolution=${resolution}&responderId=${responderId}`);
  // }

  ResolveTicket (ticketId:number, resolution:string, responderId:number){
    return this.http.patch(`${this.baseUrl}api/Ticket/resolve/${ticketId}?resolution=${resolution}&responderId=${responderId}`,{});
  }

  BookmarkTicket(ticketId:number, userId:number){
    return this.http.post(`${this.baseUrl}api/FavTicket/Bookmark/${ticketId}&${userId}`, {});
  }
}
