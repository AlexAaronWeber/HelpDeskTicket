using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        TicketsDBContext context = new TicketsDBContext();


        [HttpGet]

        public List<Ticket> getTickets()
        {
            return context.Tickets.ToList();
        }

        [HttpGet("{id}")]
        public Ticket getTicketById(int id)
        {
            return context.Tickets.Find(id);
        }

        [HttpGet("{title}")]
        public List<Ticket> getTicketByTitle(string title)
        {
            return context.Tickets.Where(x => x.Title.Contains(title)).ToList();   
        }

        [HttpPost]

        public Ticket createTicket(Ticket newTicket)
        {
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            return newTicket;
        }

    }
}
