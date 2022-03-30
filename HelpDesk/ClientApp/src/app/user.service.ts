import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Inject, Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  getAllUsers():any{
    return this.http.get(this.baseUrl + "api/User")
  }

  login(username:string, password:string ):any{
    return this.http.get(this.baseUrl+`api/User/login?username=${username}&password=${password}`);
  }

  addUser(newUser:User):any{
    
    return this.http.post(this.baseUrl + "api/User",newUser);
  }

}
