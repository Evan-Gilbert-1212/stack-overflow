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

      return Ok(user);
    }
  }
}