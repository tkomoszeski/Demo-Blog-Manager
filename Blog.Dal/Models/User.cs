using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Blog.Dal.Models.Base;

namespace Blog.Dal.Models {
    public class User : BaseEntity {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role {get; set;} 
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email {get; set;}
        public bool IsActive {get; set;}
        public string ActivationCode {get; set;}
        public BlogEntity Blog {get; set;}
    }
}