using System;
using System.Text.Json.Serialization;

namespace stack_overflow
{
  public class Answer
  {
    public int Id { get; set; }
    public string AnswerText { get; set; }
    public int AnswerScore { get; set; } = 0;
    public DateTime AnswerPostedOn { get; set; } = DateTime.Now;

    //navigation
    public int QuestionId { get; set; }

    [JsonIgnore]
    public Question Question { get; set; }
  }
}