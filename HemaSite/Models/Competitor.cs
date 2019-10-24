using System.Collections.Generic;

namespace HemaSite.Models
{
  public class Competitor
  {
    public int Id { get; set; }
    public string Username { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public ICollection<Event> Events { get; set; }
  }
}