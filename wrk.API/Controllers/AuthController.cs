using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wrk.API.Data;
using wrk.API.Dtos;
using wrk.API.Models;

namespace wrk.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister)
        {
            userForRegister.Username = userForRegister.Username.ToLower();
            if (await _repo.UserExists(userForRegister.Username))
                return BadRequest("Username já foi usado.");

            var userToCreate = new User
            {
                Username = userForRegister.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegister.Password);
            return StatusCode(201);
        }

    }
}