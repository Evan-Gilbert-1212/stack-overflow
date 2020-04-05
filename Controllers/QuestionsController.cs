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
  public class QuestionsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public QuestionsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Questions
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
    {
      // return await _context.Questions.ToListAsync();

      //Select * from Questions Join Answers on Question.Id = Answer.ID
      return await _context.Questions.Include(ques => ques.Answers).ToListAsync();
    }

    //get api/questions/search
    [HttpGet("search")]

    public async Task<ActionResult<IEnumerable<Question>>> GetResult(string searchTerm)
    {
      var results = _context.Questions.Include(question => question.Answers).Where(question => question.QuestionText.Contains(searchTerm));

      return await results.ToListAsync();
    }

    // GET: api/Questions/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuestion(int id)
    {
      var question = await _context.Questions.Include(question => question.Answers).FirstOrDefaultAsync(q => q.Id == id);

      if (question == null)
      {
        return NotFound();
      }

      return question;
    }
    // PUT: api/Questions/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("score")]
    public async Task<IActionResult> PutQuestion(int id, int buttonVal)
    {

      var questionToScore = await _context.Questions.FirstOrDefaultAsync(d => d.Id == id);
      if (buttonVal == -1)
      {
        questionToScore.QuestionScore -= 1;
      }
      else
      {
        questionToScore.QuestionScore += 1;
      }

      await _context.SaveChangesAsync();

      return Ok(questionToScore.QuestionScore);


    }

    // POST: api/Questions
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Question>> PostQuestion(Question question)
    {
      _context.Questions.Add(question);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetQuestion", new { id = question.Id }, question);
    }

    // DELETE: api/Questions/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Question>> DeleteQuestion(int id)
    {
      var question = await _context.Questions.FindAsync(id);
      if (question == null)
      {
        return NotFound();
      }

      _context.Questions.Remove(question);
      await _context.SaveChangesAsync();

      return question;
    }

    private bool QuestionExists(int id)
    {
      return _context.Questions.Any(e => e.Id == id);
    }
  }
}
