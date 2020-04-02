using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using stack_overflow.ViewModels;


namespace stack_overflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    [HttpPost("signup")]
    public async Task<ActionResult> CreateNewUser(NewUser user)
    {
      return Ok();
    }
  }
}