import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  getAllUsers():any{
    return this.http.get(this.baseUrl + "api/User")
  }

}
