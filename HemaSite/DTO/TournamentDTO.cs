using System.Collections.Generic;
using HemaSite.Models;

namespace HemaSite.DTO
{
  public class TournamentDTO
  {
    public string AdminUser { get; set; }
    public string HostClub { get; set; }
    public string TournamentName { get; set; }
    public ICollection<Event> Events { get; set; }
    public string StartDate { get; set; }
    public string EndDate { get; set; }
    public double RegistrationCost { get; set; }
    public ICollection<Competitor> Competitors { get; set; }
  }
}