import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private responseService:ResponseService, private ticketService:TicketService, private route:ActivatedRoute, private loginService:LoginService) { }

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
    this.responses.push(aResponse);
    this.responseService.AddResponsesByID(ticketId,form.form.value.answer).subscribe((response: any) => {
      console.log(response);
      form.resetForm();
    })

  }


}
