using HemaSite.Models;

namespace HemaSite.DTO
{
  public class AdminUsersTournamentsDTO : Tournament
  {
    public bool UpcomingTournament { get; set; }
  }
}