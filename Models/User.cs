using System.Collections.Generic;

namespace stack_overflow
{
  public class User
  {
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string PicturePath { get; set; }
    //navigation
    public List<Question> Questions { get; set; } = new List<Question>();
    public List<Answer> Answers { get; set; } = new List<Answer>();

  }
}