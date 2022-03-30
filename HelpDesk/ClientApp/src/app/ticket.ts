import { User } from "./user";

export interface Ticket {
    id:          number;
    title:       string;
    question:    string;
    userId:      number;
    responderId: number;
    resolution:  string;
    responder:   User;
    user:        User;
    favTickets:  any[];
}
