import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavticketService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  getAllFavTickets(id:number):any{
    return this.http.get(`${this.baseUrl}api/FavTicket/GetAll/${id}`)
  }
}
