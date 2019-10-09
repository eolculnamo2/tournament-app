using System;
using System.Threading.Tasks;
using System.Linq;
using HemaSite.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HemaSite.Data
{
  public interface ITournamentRepository
  {
    Task<bool> SaveTournament(Tournament tournament);
    Task<List<Tournament>> GetFutureTournaments();
    Task<Tournament> GetTournamentById(int id);
    Task<Tournament> AddCompetitorToEvent(Competitor competitor, int tournamentId);
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
    public async Task<List<Tournament>> GetFutureTournaments()
    {
      try
      {
        return await context.Tournaments.Where(x => x.StartDate > DateTime.Now).ToListAsync();
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
        return null;
      }
    }

    public async Task<Tournament> GetTournamentById(int id)
    {
      return await context.Tournaments
                          .Include(x => x.Competitors)
                          .Include(x => x.Events)
                          .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Tournament> AddCompetitorToEvent(Competitor competitor, int tournamentId)
    {
      var tournament = await GetTournamentById(tournamentId);
      tournament.Competitors.Add(competitor);
      await context.SaveChangesAsync();
      return tournament;
    }

    public async Task<bool> UserInTournament(string username, int tournamentId)
    {
      var tournament = await GetTournamentById(tournamentId);
      // TODO make this work...
      var registered = await context.Tournaments.FirstOrDefaultAsync(x => x.Competitors != null) != null;
      return registered;
    }

  }
}