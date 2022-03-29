﻿using HelpDesk.Models;
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

        [HttpPost]
        public User createUser(User newUser)
        {
            context.Users.Add(newUser);
            context.SaveChanges();
            return newUser;
        }
        

    }
}
