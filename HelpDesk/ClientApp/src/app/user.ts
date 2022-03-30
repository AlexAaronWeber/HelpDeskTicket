export interface User {
    id:               number;
    name:             string;
    email:            string;
    password: string;
    favTickets:       any[];
    ticketResponders: any[];
    ticketUsers:      any[];
}
