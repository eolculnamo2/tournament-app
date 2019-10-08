using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HemaSite.Data;
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
    private ITournamentService tournamentService { get; }
    private ITournamentRepository tournamentRepository { get; }
    public TournamentController(ITournamentService tournamentService, ITournamentRepository tournamentRepository)
    {
      this.tournamentService = tournamentService;
      this.tournamentRepository = tournamentRepository;
    }

    [HttpPost("create-tournament")]
    public async Task<IActionResult> CreateTournament(TournamentDTO tournamentDto)
    {
      var username = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value;
      var tournament = await tournamentService.CreateTournament(tournamentDto, username);
      return Ok(tournament);
    }

    [HttpGet("upcoming-tournaments")]
    public async Task<IActionResult> GetFutureTournaments()
    {
      var upcomingTournaments = await tournamentRepository.GetFutureTournaments();
      return Ok(upcomingTournaments);
    }

    [HttpGet("tournament-details/{tournamentId}")]
    public async Task<IActionResult> TournamentDetails(int tournamentId)
    {
      var tournament = await tournamentRepository.GetTournamentById(tournamentId);
      return Ok(tournament);
    }
  }
}