using System;
using System.Collections.Generic;

namespace HelpDesk.Models
{
    public partial class User
    {
        public User()
        {
            FavTickets = new HashSet<FavTicket>();
            Responses = new HashSet<Response>();
            Tickets = new HashSet<Ticket>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]

        public virtual ICollection<FavTicket> FavTickets { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Response> Responses { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
