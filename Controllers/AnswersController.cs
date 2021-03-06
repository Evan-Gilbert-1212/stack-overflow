using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stack_overflow;
using stack_overflow.Models;

namespace stack_overflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AnswersController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public AnswersController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Answers
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Answer>>> GetAnswers()
    {
      return await _context.Answers.ToListAsync();
    }

    // GET: api/Answers/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Answer>> GetAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);

      if (answer == null)
      {
        return NotFound();
      }

      return answer;
    }

    [HttpPut("upvote/{id}")]
    public async Task<IActionResult> PutAnswerUp(int id)
    {
      var answerToScore = await _context.Answers.FirstOrDefaultAsync(d => d.Id == id);

      answerToScore.AnswerScore += 1;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnswerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }
      Console.WriteLine(answerToScore.AnswerScore);

      return NoContent();

    }


    [HttpPut("downvote/{id}")]
    public async Task<IActionResult> PutAnswerDown(int id)
    {
      var answerToScore = await _context.Answers.FirstOrDefaultAsync(d => d.Id == id);

      answerToScore.AnswerScore -= 1;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnswerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }
      Console.WriteLine(answerToScore.AnswerScore);

      return NoContent();

    }

    // PUT: api/Answers/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAnswer(int id, Answer answer)
    {
      if (id != answer.Id)
      {
        return BadRequest();
      }

      _context.Entry(answer).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnswerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Answers
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Answer>> PostAnswer(Answer answer)
    {
      _context.Answers.Add(answer);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetAnswer", new { id = answer.Id }, answer);
    }

    // DELETE: api/Answers/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Answer>> DeleteAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);
      if (answer == null)
      {
        return NotFound();
      }

      _context.Answers.Remove(answer);
      await _context.SaveChangesAsync();

      return answer;
    }

    private bool AnswerExists(int id)
    {
      return _context.Answers.Any(e => e.Id == id);
    }
  }
}
