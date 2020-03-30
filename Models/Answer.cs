using System;

namespace stack_overflow
{
  public class Answer
  {
    public int Id { get; set; }
    public string AnswerText { get; set; }
    public int AnswerScore { get; set; }
    public DateTime AnswerPostedOn { get; set; } = DateTime.Now;

    //navigation
    public int QuestionId { get; set; }
    public Question Question { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
  }
}