import { Ticket } from "./ticket";

export interface Favticket {
    id: number;
    ticketId: number;
    userId: number;

    ticket: Ticket;
}
