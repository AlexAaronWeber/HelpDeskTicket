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
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            return newTicket;
        }

        [HttpPut("Resolve/{id}")]
        public Ticket AddTicketResolution(string resolution, int responderId, int id)
        {
            Ticket result = null;

            result = context.Tickets.FirstOrDefault(t => t.Id == id);
            result.Resolution = resolution;
            result.ResponderId = responderId;
            context.Tickets.Update(result);
            context.SaveChanges();
            return result;
        }

        //[HttpPost]
        //public List<Ticket> BookmarkTicket(Ticket result)
        //{
        //    result = null;
        //    List<Ticket> favTickets = new List<Ticket>();
        //    result = context.Tickets. FirstOrDefault(r => r.Id == result.Id);
        //    favTickets.Add(result);
        //    return favTickets;
            
        //}

        //[HttpPost]
        //public void BookmarkTicket(int ticketId, int userId)
        //{
        //    FavTicket favTicket = new FavTicket();
        //    Ticket result = null;
        //    User user = null;
        //    result.Id = ticketId;
        //    favTicket.TicketId =
        //}


    }
}
