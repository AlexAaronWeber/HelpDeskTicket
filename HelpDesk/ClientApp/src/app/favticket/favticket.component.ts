import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favticket } from '../favticket';
import { FavticketService } from '../favticket.service';

@Component({
  selector: 'app-favticket',
  templateUrl: './favticket.component.html',
  styleUrls: ['./favticket.component.css']
})
export class FavticketComponent implements OnInit {

  favTickets:Favticket[] = [];
  constructor(private favTicketService:FavticketService, private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id : number = Number(this.route.snapshot.paramMap.get("id"));
    this.favTicketService.getAllFavTickets(id).subscribe((response:Favticket[]) => {
      this.favTickets = response;
      console.log(response)
    })
  }

}
