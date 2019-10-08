using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using HemaSite.Models;

namespace HemaSite.DTO
{
  public class TournamentDTO
  {
    [Required]
    public string HostClub { get; set; }
    [Required]
    public string TournamentName { get; set; }
    [Required]
    public List<Event> Events { get; set; }
    [Required]
    public DateTime StartDate { get; set; }
    [Required]
    public DateTime EndDate { get; set; }
    [Required]
    public double RegistrationCost { get; set; }
    [Required]
    public List<Competitor> Competitors { get; set; }
  }
}