import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

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
}
