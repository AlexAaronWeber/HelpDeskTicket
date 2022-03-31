import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  
  endpoint: string = "api/Response";
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private loginService:LoginService) { }

  GetResponsesByID(ticketId:number): any{
    return this.http.get(`${this.baseUrl}${this.endpoint}?TicketId=${ticketId}`);
  }

  AddResponsesByID(ticketID:number, resolution:string): any{
    let myUser:User = this.loginService.getLogin();
    return this.http.post(`${this.baseUrl}${this.endpoint}?TicketId=${ticketID}&resolution=${resolution}&responderId=${myUser.id}`, {});
  }

  DeleteResponseByID(responseId:number): any{
    return this.http.delete(`${this.baseUrl}${this.endpoint}?responseId=${responseId}`);
  }
}
