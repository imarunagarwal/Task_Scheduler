using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Task_scheduler_Api.Models;
using Task_scheduler_Api.Services;

namespace Task_scheduler_Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowOrigin")]
    public class ValuesController : ControllerBase
    {
        private IUserService _userService;

        public ValuesController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody]User userParam)
        {
            var user = _userService.Authenticate(userParam.Username, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet]
        public AppResponseApiModel LoggedInUser()
        {
            User userApiModel = _userService.GetLoggedInUser((ClaimsIdentity)User.Identity);
            AppResponseApiModel appResponse = new AppResponseApiModel
            {
                Status = AppStatus.SUCCESS.ToString(),
                Code = Convert.ToInt32(AppStatus.SUCCESS).ToString(),
                Message = "",
                Data = userApiModel
            };
            return appResponse;
        }

        public AppResponseApiModel CreateUserProfile([FromBody]User userParam)
        {
            return null;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}
