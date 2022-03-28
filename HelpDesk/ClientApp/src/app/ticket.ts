export interface Ticket {
    id:          number;
    title:       string;
    question:    string;
    userId:      number;
    responderId: number;
    resolution:  string;
    responder:   null;
    user:        null;
    favTickets:  any[];
}
