using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Task_scheduler_Api.Models;

namespace Task_scheduler_Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowOrigin")]
    public class DescriptionController : Controller
    {   [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public DiscriptionsModel AddNotes()
        {
            return null;
        }
        [HttpPost]
        public DiscriptionsModel UpdateNotes()
        {
            return null;
        }

        [HttpDelete]
        public DiscriptionsModel DeleteNotes()
        {
            return null;
        }

    }
}