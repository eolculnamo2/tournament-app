using System.Collections.Generic;
using System.Threading.Tasks;
using HemaSite.Data;
using HemaSite.DTO;
using HemaSite.Models;
using AutoMapper;
using System;

namespace HemaSite.Services
{
  public interface ITournamentService
  {
    Task<Tournament> CreateTournament(TournamentDTO tournamentDto, string adminUser);
    Task<Tournament> RegisterForTournament(string username, RegisterDTO registerDTO, int tournamentId);
    List<AdminUsersTournamentsDTO> GetAdminUsersTournaments(string username);
  }
  public class TournamentService : ITournamentService
  {
    private ITournamentRepository repository { get; }
    private IAuthRepository authRepository { get; }
    public TournamentService(ITournamentRepository repository, IAuthRepository authRepository)
    {
      this.repository = repository;
      this.authRepository = authRepository;
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

    public async Task<Tournament> RegisterForTournament(string username, RegisterDTO registerDTO, int tournamentId)
    {
      if (await repository.UserInTournament(username, tournamentId)) return null;

      User user = await authRepository.GetUserByUsername(username);
      List<Event> events = new List<Event>();

      foreach (string eventName in registerDTO.Events)
      {
        Event evt = new Event();
        evt.EventName = eventName;
        events.Add(evt);
      }

      var competitor = new Competitor
      {
        Username = user.Username,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Events = events
      };

      var tournament = await repository.AddCompetitorToEvent(competitor, tournamentId);
      return tournament;
    }

    public List<AdminUsersTournamentsDTO> GetAdminUsersTournaments(string username)
    {
      var tournaments = repository.GetTournamentsManagedByUser(username);
      var config = new MapperConfiguration(cfg =>
      {
        cfg.CreateMap<Tournament, AdminUsersTournamentsDTO>();
      });
      IMapper mapper = config.CreateMapper();

      var tournamentsList = new List<AdminUsersTournamentsDTO>();

      foreach (Tournament tournament in tournaments)
      {
        var mappedTournament = mapper.Map<Tournament, AdminUsersTournamentsDTO>(tournament);
        mappedTournament.UpcomingTournament = mappedTournament.StartDate > DateTime.Now;
        tournamentsList.Add(mappedTournament);
      }

      return tournamentsList;
    }
  }
}