using System;
using System.Collections.Generic;

namespace HelpDesk.Models
{
    public partial class Ticket
    {
        public Ticket()
        {
            FavTickets = new HashSet<FavTicket>();
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Question { get; set; } = null!;
        public int? UserId { get; set; }
        public int? ResponderId { get; set; }
        public string? Resolution { get; set; }

        public virtual User? Responder { get; set; }
        public virtual User? User { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<FavTicket> FavTickets { get; set; }

    }
}
