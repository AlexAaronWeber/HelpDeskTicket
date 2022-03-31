using System;
using System.Collections.Generic;

namespace HelpDesk
{
    public partial class User
    {
        public User()
        {
            FavTickets = new HashSet<FavTicket>();
            Responses = new HashSet<Response>();
            TicketResponders = new HashSet<Ticket>();
            TicketUsers = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }

        public virtual ICollection<FavTicket> FavTickets { get; set; }
        public virtual ICollection<Response> Responses { get; set; }
        public virtual ICollection<Ticket> TicketResponders { get; set; }
        public virtual ICollection<Ticket> TicketUsers { get; set; }
    }
}
