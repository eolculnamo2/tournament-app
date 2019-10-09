using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HemaSite.Data;
using HemaSite.DTO;
using HemaSite.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using HemaSite.Models;

namespace HemaSite.Controllers
{
  [Authorize]
  [ApiController]
  [Route("api/[controller]")]
  public class JudgesController : ControllerBase
  {
    private readonly IJudgesRepository judgesRepository;
    private readonly ITournamentRepository tournamentRepository;

    public JudgesController(IJudgesRepository judgesRepository, ITournamentRepository tournamentRepository)
    {
      this.judgesRepository = judgesRepository;
      this.tournamentRepository = tournamentRepository;
    }

    // In the future, this will be replaced with web sockets after MVP.
    [HttpPost("save-results")]
    public async Task<IActionResult> SaveResults(MatchDTO matchDto)
    {
      var tournament = await tournamentRepository.GetTournamentById(matchDto.TournamentId);

      var match = new Match
      {
        Round = matchDto.Round,
        Fighter1 = matchDto.Fighter1,
        Fighter2 = matchDto.Fighter2,
        Event = matchDto.Event,
        Winner = matchDto.Winner,
        TournamentId = matchDto.TournamentId,
        Tournament = tournament
      };

      judgesRepository.CreateMatch(match);
      return Ok(match);
    }
  }
}