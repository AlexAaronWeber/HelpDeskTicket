using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavTicketController : ControllerBase
    {
        TicketsDBContext context = new TicketsDBContext();

        [HttpPost("Bookmark/{ticketId}&{userId}")]
        public FavTicket BookmarkTicket(int ticketId, int userId)
        {
            FavTicket NewFavTicket = new FavTicket();
            if (context.FavTickets.Where(t => t.UserId == userId && t.TicketId == ticketId).Count() == 0)
            {
                NewFavTicket.TicketId = ticketId;
                NewFavTicket.UserId = userId;
                context.FavTickets.Add(NewFavTicket);
                context.SaveChanges();
            }
            return NewFavTicket;
        }

        [HttpGet("GetAll/{userId}")]
        public List<FavTicket> GetAllFavTickets(int userId)
        {
            return context.FavTickets.Include(fav => fav.Ticket).Where(t => t.UserId == userId).ToList();
        }

        [HttpDelete("Delete/{Id}")]
        public FavTicket UnBookmark(int Id)
        {
            FavTicket result = null;
            result = context.FavTickets.FirstOrDefault(t => t.Id == Id);
            context.FavTickets.Remove(result);
            context.SaveChanges();

            return result;
        }

    }
}
