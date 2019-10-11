namespace HemaSite.DTO
{
  public class MatchDTO
  {
    public int Round { get; set; }
    public string Fighter1 { get; set; }
    public string Fighter2 { get; set; }
    public string Event { get; set; }
    public string Winner { get; set; }
    public int TournamentId { get; set; }
  }
}