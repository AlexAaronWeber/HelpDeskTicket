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

            List<Ticket> result= context.Tickets.ToList();
            foreach(Ticket ticket in result)
            {
                ticket.Responder = context.Users.FirstOrDefault(u=> u.Id == ticket.ResponderId);
            }
            return result;
            // context.Tickets.Include(t=> t.Responder).ToList();
        }

        [HttpGet("ById/{id}")]
        public Ticket GetTicketById(int id)
        {
            return context.Tickets.Include(t => t.User).Include(t => t.Responder).Where(ticket => ticket.Id == id).FirstOrDefault();
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
            newTicket.ResponderId = null;
            // newTicket.respo
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            return newTicket;
        }

        [HttpPatch("resolve/{id}")]
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
            List<FavTicket> result2 = null;
            //Removes references of this ticket in the FavTicketTable
            result2 = context.FavTickets.Where(x => x.TicketId == id).ToList();
            if(result2.Count > 0)
            {
                context.FavTickets.RemoveRange(result2);
            }
            result = context.Tickets.FirstOrDefault(t => t.Id == id);
            context.Tickets.Remove(result);
            context.SaveChanges();

            return result;
        }
    }
}
