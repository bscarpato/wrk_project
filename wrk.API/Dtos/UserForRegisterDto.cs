using System.ComponentModel.DataAnnotations;

namespace wrk.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "A senha deve ser 4-8")]
        public string Password { get; set; }
    }
}