using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        TicketsDBContext context = new TicketsDBContext();

        [HttpGet]

        public List<User> getUsers()
        {
            return context.Users.ToList();
        }

        [HttpGet("login")]
        public User login(string username, string password)
        {
            return context.Users.FirstOrDefault(u=> u.Name == username && u.Password == password);  
        }

        [HttpPost]
        public User createUser(User newUser)
        {
            context.Users.Add(newUser);
            context.SaveChanges();
            return newUser;
        }
        

    }
}
