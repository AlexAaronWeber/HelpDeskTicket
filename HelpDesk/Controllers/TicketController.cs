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
        public List<Ticket> GetTickets()
        {
            return context.Tickets.ToList();
        }

        [HttpGet("{id}")]
        public Ticket GetTicketById(int id)
        {
            return context.Tickets.Find(id);
        }

        [HttpGet("{title}")]
        public List<Ticket> GetTicketByTitle(string title)
        {
            return context.Tickets.Where(x => x.Title.Contains(title)).ToList();
        }

        [HttpPost]
        public Ticket CreateTicket(Ticket newTicket)
        {
            newTicket.ResponderId = null;
            // newTicket.respo
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            return newTicket;
        }

        [HttpPut("resolve/{id}")]
        // example: /api/Ticket/Resolve/1?resolution=resolved&responderId=2
        public Ticket AddTicketResolution(int id, string resolution, int responderId)
        {
            Ticket result = null;

            result = context.Tickets.FirstOrDefault(t => t.Id == id);
            result.Resolution = resolution;
            result.ResponderId = responderId;
            context.Tickets.Update(result);
            context.SaveChanges();
            return result;
        }

        [HttpDelete("delete/{id}")]
        public Ticket DeleteTicket(int id) //, int userId
        {
            Ticket result = null;

            result = context.Tickets.FirstOrDefault(t => t.Id == id);
            context.Tickets.Remove(result);
            context.SaveChanges();

            return result;
        }
    }
}
