using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using HemaSite.Data;
using HemaSite.DTO;
using HemaSite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
//using DatingApp.API.Models;

namespace HemaSite.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    public IAuthRepository repository { get; }
    public IConfiguration config { get; }
    public AuthController(IAuthRepository repository, IConfiguration config)
    {
      this.config = config;
      this.repository = repository;
    }

    [HttpPost("register")]
    // optional add [FromBody], but [ApiController] automatically infers that it is from body
    public async Task<IActionResult> Register(UserRegister userRegister)
    {
      userRegister.Username = userRegister.Username.ToLower();

      if (await repository.UserExists(userRegister.Username))
      {
        return BadRequest("Username is not available");
      }

      var userToCreate = new User
      {
        Username = userRegister.Username,
        FirstName = userRegister.FirstName,
        LastName = userRegister.LastName,
        Email = userRegister.Email
      };

      var createdUser = repository.Register(userToCreate, userRegister.Password);

      return StatusCode(201);
    }

    // JWT = JSON Web Token.. Industry standard for web tokens
    [HttpPost("login")]
    public async Task<IActionResult> Login(UserLogin userLogin)
    {
      var user = await repository.Login(userLogin.Username.ToLower(), userLogin.Password);

      if (user == null)
      {
        return Unauthorized();
      }

      // cliams which store information for JWT without  having to make another db call.
      var claims = new[] {
                new Claim (ClaimTypes.NameIdentifier, user.Id.ToString ()),
                new Claim (ClaimTypes.Name, user.Username)
            };

      // hashed key to sign token
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("AppSettings:Token").Value));

      //Signing Credentials
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

      // token descriptor -- describes token
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(claims),
        Expires = DateTime.Now.AddDays(1),
        SigningCredentials = creds
      };

      // define token handler
      var tokenHandler = new JwtSecurityTokenHandler();

      // user token handler to create token with token descriptor
      var token = tokenHandler.CreateToken(tokenDescriptor);

      return Ok(new
      {
        token = tokenHandler.WriteToken(token),
        firstName = user.FirstName,
        lastName = user.LastName
      });
    }
  }

}