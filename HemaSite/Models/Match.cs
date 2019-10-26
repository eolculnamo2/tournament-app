namespace HemaSite.Models
{
  public class Match
  {
    public int Id { get; set; }
    public int Round { get; set; }
    public string Fighter1 { get; set; }
    public string Fighter2 { get; set; }
    public string Event { get; set; }
    public Tournament Tournament { get; set; }
    public int TournamentId { get; set; }
    public string Winner { get; set; }
  }
}