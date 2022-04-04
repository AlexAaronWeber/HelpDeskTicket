import { Ticket } from "./ticket";
import { User } from "./user";


export interface Response {
    id:          number;
    ticketId:    number;
    responderId: number;
    response1:   string;
    responder:   User;
    ticket:      Ticket;
}