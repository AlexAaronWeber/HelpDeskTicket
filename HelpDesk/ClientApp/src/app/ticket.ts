import { User } from "./user";

export interface Ticket {
    id:          number;
    title:       string;
    question:    string;
    userId:      number;
    responder:   User;
    user:        User;
    favTickets:  any[];
}
