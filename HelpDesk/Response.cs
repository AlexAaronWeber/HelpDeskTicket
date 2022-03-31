using System;
using System.Collections.Generic;

namespace HelpDesk
{
    public partial class Response
    {
        public int Id { get; set; }
        public int? TicketId { get; set; }
        public int? ResponderId { get; set; }
        public string? Response1 { get; set; }

        public virtual User? Responder { get; set; }
        public virtual Ticket? Ticket { get; set; }
    }
}
