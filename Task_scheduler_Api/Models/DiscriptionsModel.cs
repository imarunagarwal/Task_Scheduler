using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Task_scheduler_Api.Models
{
    public class DiscriptionsModel
    {
        public string Notes { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; } 
    }
}
