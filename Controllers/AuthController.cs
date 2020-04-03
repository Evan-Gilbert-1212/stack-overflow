using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using stack_overflow.Models;
using stack_overflow.ViewModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace stack_overflow.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {

    private DatabaseContext _context;

    public AuthController(DatabaseContext context)
    {
      _context = context;
    }


    private string CreateJWT(User user)
    {
      var expirationTime = DateTime.UtcNow.AddHours(4);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
         {
           new Claim("id", user.Id.ToString()),
           new Claim("email", user.Email),
           new Claim("name", user.FullName)
         }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.ASCII.GetBytes("I COULD NOT THING OF SOMETHING CUTE SO THIS WILL HAVE TO DO")),
            SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

      user.HashedPassword = null;

      return token;
    }








    [HttpPost("signup")]
    public async Task<ActionResult> CreateNewUser(NewUser newUser)
    {
      if (newUser.Password.Length < 7)
      {
        return BadRequest("Password must be a minimum of 7 characters");
      }

      var doesUserExist = await _context.Users.AnyAsync(user => user.Email.ToLower() == newUser.Email.ToLower());
      if (doesUserExist)
      {
        return BadRequest("There is already a user with that email address");
      }

      var user = new User
      {
        Email = newUser.Email,
        FullName = newUser.FullName,
      };

      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);
      user.HashedPassword = hashed;
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      user.HashedPassword = null;
      return Ok(new { Token = CreateJWT(user), user = user });
    }

    [HttpPost("login")]

    public async Task<ActionResult> Login(UserLogin userLogin)
    {
      var user = await _context
        .Users
        .FirstOrDefaultAsync(user => user.Email.ToLower() == userLogin.Email.ToLower());

      if (user == null)
      {
        return BadRequest("That user is not in our system");
      }

      var results = new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, userLogin.Password);

      if (results == PasswordVerificationResult.Success)
      {
        user.HashedPassword = null;
        return Ok(new { Token = CreateJWT(user), user = user });
      }
      else
      {
        return BadRequest("Incorrect Password!");
      }
    }
  }
}