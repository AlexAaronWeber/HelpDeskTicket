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
    return this.http.get(`${this.baseUrl}api/Ticket/${id}`)
  }

  getByTitle(title:string):any {
    return this.http.get(`${this.baseUrl}api/Ticket/${title}`)
  }

  CreateTicket(ticket: Ticket){
    let fullUrl: string = this.baseUrl + this.endpoint;
    return this.http.post(fullUrl, ticket);
  }
}
