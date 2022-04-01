import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { FavticketComponent } from './favticket/favticket.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { LoginComponent } from './login/login.component';
import { ResponseComponent } from './response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    TicketComponent,
    UserComponent,
    FavticketComponent,
    CreateticketComponent,
    CreateUserComponent,
    TicketDetailsComponent,
    LoginComponent,
    ResponseComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TicketComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'ticket', component:TicketComponent},
      { path: 'ticketdeets/:id', component:TicketDetailsComponent},
      { path: 'favticket/:id', component:FavticketComponent},
      { path: 'createticket', component:CreateticketComponent },
      { path: 'createuser', component:CreateUserComponent },
      { path: 'login', component:LoginComponent }
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
