import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FavticketService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private loginService:LoginService) { }

  getAllFavTickets():any{
    let myUser:User = this.loginService.getLogin();
    return this.http.get(`${this.baseUrl}api/FavTicket/GetAll/${myUser.id}`)
  }
}
