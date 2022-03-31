import { User } from "./user";

export interface Ticket {
    id:          number;
    title:       string;
    question:    string;
    userId:      number;
    user:        User;
    favTickets:  any[];
}
