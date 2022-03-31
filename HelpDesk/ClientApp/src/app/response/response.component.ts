import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  
  constructor(private responseService:ResponseService) { }

  ngOnInit(): void {
  }

  // GetResponsesById(ticketId:number){
  //   this.responseService.GetResponsesByID(ticketId).subscribe((response:Response) => {

  //   })
  // }

}
