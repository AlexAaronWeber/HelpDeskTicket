using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavTicketController : ControllerBase
    {
        TicketsDBContext context = new TicketsDBContext();

        [HttpPost("Bookmark/{ticketId}&{userId}")]
        public void BookmarkTicket(int ticketId, int userId)
        {
            if(context.FavTickets.Where(t => t.UserId == userId && t.TicketId == ticketId).Count() == 0)
            {
                FavTicket favTicket = new FavTicket();
                favTicket.TicketId = ticketId;
                favTicket.UserId = userId;
                context.FavTickets.Add(favTicket);
                context.SaveChanges();
            }            
        }

        [HttpGet("GetAll/{userId}")]
        public List<FavTicket> GetAllFavTickets(int userId)
        {
            return context.FavTickets.Where(t => t.UserId == userId).ToList();
        }
    }
}
