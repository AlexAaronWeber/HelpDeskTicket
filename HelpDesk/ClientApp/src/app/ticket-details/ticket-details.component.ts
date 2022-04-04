import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ResponseService } from '../response.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../user';
import { Response } from '../response';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  responses:Response[] = [];
result:Ticket = {} as Ticket;
responder:User = {} as User;
  constructor(private responseService:ResponseService, private ticketService:TicketService, private route:ActivatedRoute, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.ticketService.getById(id).subscribe((response:Ticket)=>{
      this.result=response;
      //this.result.user.id = response.userId;
      console.log(response);
      this.responseService.GetResponsesByID(id).subscribe((rResponse: Response[]) => {
        console.log(rResponse);
        this.responses = rResponse;
      });
    });
  }

  ResolveTicket(ticketId:number, form:NgForm): void {
    let aResponse: Response = {} as Response;
    aResponse.response1 = form.form.value.answer;
    //aResponse.responder=  this.loginService.getLogin().name;
    console.log(this.result.id);
    console.log(form.form.value.answer);
    this.responseService.AddResponsesByID(ticketId,form.form.value.answer).subscribe((response: any) => {
      //aResponse.responder=response.responder;
      aResponse=response;
      this.responses.push(aResponse);
      console.log(response);
      form.resetForm();
    })
  }

  DeleteResponse(responseId: number):void{
    console.log(responseId+"this is the response error")
    let index: number = this.responses.findIndex(r => r.id == responseId);
    this.responses.splice(index, 1);
    this.responseService.DeleteResponseByID(responseId).subscribe((response:any) => {
      console.log(response);
      //this.responses.splice(responseId,1);
    })
  }
  BookmarkTicket(ticketId:number):any{
    if(this.loginService.getLogin() != null){
      this.ticketService.BookmarkTicket(ticketId).subscribe((response:any) => {
        console.log(response);
      }) 
    }
    else{
      this.router.navigate(["/login"])
    }

  }


}
