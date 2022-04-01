using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpDesk.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    public class ResponseController : Controller
    {
        TicketsDBContext context = new TicketsDBContext();

        [HttpGet]
        public List<Response> GetResponsesByID(int TicketId)
        {

            return context.Responses.Where(r => r.TicketId == TicketId).ToList();
        }

        [HttpPost]
        public Response AddResponsesByID(int TicketID, string resolution, int responderID)
        {
            Response result = new Response();
            result.Response1 = resolution;
            result.TicketId = TicketID;
            result.ResponderId = responderID;
            context.Responses.Update(result);
            context.SaveChanges();
            return result;

        }

        [HttpDelete]
        public void DeleteResponseByID(int responseId)
        {
            Response result = null;
            result = context.Responses.FirstOrDefault(r => r.Id == responseId);
            if (result != null)
            {
                context.Responses.Remove(result);
                context.SaveChanges();
            }
        }
    }
}


