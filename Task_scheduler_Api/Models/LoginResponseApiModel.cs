using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task_scheduler_Api.Models
{
    public class LoginResponseApiModel
    {
        public string UserName { get; set; }

        public string Role { get; set; }

        public bool IsAuthenticate { get; set; }

        public string Token { get; set; }

        public string Message { get; set; }
    }
}
