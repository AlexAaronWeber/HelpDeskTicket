using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            List<Ticket> result = context.Tickets.ToList();
            return result;
        }

        [HttpGet("ById/{id}")]
        public Ticket GetTicketById(int id)
        {
            return context.Tickets.Include(t => t.User).Where(ticket => ticket.Id == id).FirstOrDefault();
            //meow
        }

        [HttpGet("{title}")]
        public List<Ticket> GetTicketByTitle(string title)
        {
            return context.Tickets.Where(x => x.Title.Contains(title)).ToList();
        }

        [HttpPost]
        public Ticket CreateTicket(Ticket newTicket)
        {
            newTicket.User = null;
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            return newTicket;
        }

        [HttpDelete("delete/{id}")]
        public Ticket DeleteTicket(int id) //, int userId
        {
            Ticket result = null;
            List<FavTicket> result2 = null;
            List<Response> result3 = null;
            //Removes references of this ticket in the FavTicketTable
            result2 = context.FavTickets.Where(x => x.TicketId == id).ToList();
            if (result2.Count > 0)
            {
                context.FavTickets.RemoveRange(result2);
            }
            result3 = context.Responses.Where(r => r.TicketId == id).ToList();
            if (result3.Count > 0)
            {
                context.Responses.RemoveRange(result3);
            }
            result = context.Tickets.FirstOrDefault(t => t.Id == id);
            context.Tickets.Remove(result);
            context.SaveChanges();

            return result;
        }
    }
}
