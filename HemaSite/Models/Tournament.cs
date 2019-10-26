using System;
using System.Collections.Generic;

namespace HemaSite.Models
{
  public class Tournament
  {
    public int Id { get; set; }
    public string AdminUser { get; set; }
    public string HostClub { get; set; }
    public string TournamentName { get; set; }
    public ICollection<Event> Events { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public double RegistrationCost { get; set; }
    public ICollection<Competitor> Competitors { get; set; }
    public ICollection<Match> Matches { get; set; }
  }
}