using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task_scheduler_Api.Models
{
    public class AppResponseApiModel
    {
        public string Status { get; set; }

        public string Code { get; set; }

        public string Message { get; set; }

        public object Data { get; set; }

        public LoginResponseApiModel loginResponses { get; set; }
    }
}
