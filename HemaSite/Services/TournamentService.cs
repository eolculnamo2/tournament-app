using System.Threading.Tasks;
using HemaSite.Data;
using HemaSite.DTO;
using HemaSite.Models;

namespace HemaSite.Services
{
  public interface ITournamentService
  {
    Task<Tournament> CreateTournament(TournamentDTO tournamentDto, string adminUser);
  }
  public class TournamentService : ITournamentService
  {
    public ITournamentRepository repository { get; }
    public TournamentService(ITournamentRepository repository)
    {
      this.repository = repository;
    }

    public async Task<Tournament> CreateTournament(TournamentDTO tournamentDto, string adminUser)
    {

      var tournament = new Tournament
      {
        AdminUser = adminUser,
        HostClub = tournamentDto.HostClub,
        TournamentName = tournamentDto.TournamentName,
        Events = tournamentDto.Events,
        StartDate = tournamentDto.StartDate,
        EndDate = tournamentDto.EndDate,
        RegistrationCost = tournamentDto.RegistrationCost
      };

      await repository.SaveTournament(tournament);

      return tournament;
    }
  }
}