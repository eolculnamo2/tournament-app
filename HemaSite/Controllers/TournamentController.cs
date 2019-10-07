using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HemaSite.DTO;
using HemaSite.Models;
using HemaSite.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using HemaSite.Models;

namespace HemaSite.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class TournamentController : ControllerBase
  {
    public ITournamentService tournamentService { get; }
    public TournamentController(ITournamentService tournamentService)
    {
      this.tournamentService = tournamentService;
    }

    [HttpPost("create-tournament")]
    public async Task<IActionResult> CreateTournament(TournamentDTO tournamentDto)
    {
      var tournament = await tournamentService.CreateTournament(tournamentDto);
      return Ok(tournament);
    }
  }
}