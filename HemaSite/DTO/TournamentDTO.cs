using System.Collections.Generic;
using HemaSite.Models;

namespace HemaSite.DTO
{
  public class TournamentDTO
  {
    public string HostClub { get; set; }
    public string TournamentName { get; set; }
    public List<Event> Events { get; set; }
    public string StartDate { get; set; }
    public string EndDate { get; set; }
    public double RegistrationCost { get; set; }
    public List<Competitor> Competitors { get; set; }
  }
}