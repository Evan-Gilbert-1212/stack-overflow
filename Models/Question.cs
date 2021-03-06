using System.Collections.Generic;
using System;

namespace stack_overflow
{
  public class Question
  {
    public int Id { get; set; }
    public string QuestionTitle { get; set; }
    public string QuestionText { get; set; }
    public int QuestionScore { get; set; } = 0;
    public string Tags { get; set; }
    public DateTime QuestionPostedOn { get; set; } = DateTime.Now;
    //navigation
    public List<Answer> Answers { get; set; }
  }
}