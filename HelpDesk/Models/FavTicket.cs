using System;
using System.Collections.Generic;

namespace HelpDesk.Models
{
    public partial class FavTicket
    {
        public int Id { get; set; }
        public int? TicketId { get; set; }
        public int? UserId { get; set; }

        public virtual Ticket? Ticket { get; set; }
        public virtual User? User { get; set; }
    }
}
