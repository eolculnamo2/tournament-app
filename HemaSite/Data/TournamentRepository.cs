using System;
using System.Threading.Tasks;
using HemaSite.Models;

namespace HemaSite.Data
{
  public interface ITournamentRepository
  {
    Task<bool> SaveTournament(Tournament tournament);
  }
  public class TournamentRepository : ITournamentRepository
  {
    public DataContext context { get; }
    public TournamentRepository(DataContext context)
    {
      this.context = context;

    }
    public async Task<bool> SaveTournament(Tournament tournament)
    {
      try
      {
        await context.Tournaments.AddAsync(tournament);
        await context.SaveChangesAsync();
        return true;
      }
      catch (Exception e)
      {
        Console.WriteLine(e);
        return false;
      }
    }
  }
}