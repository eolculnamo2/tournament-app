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
  [ApiController]
  [Route("api/[controller]")]
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
      var username = GetUsername();
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

    [HttpPost("register/{tournamentId}")]
    public async Task<IActionResult> Register(RegisterDTO registerDto, int tournamentId)
    {
      var username = GetUsername();
      var tournament = await tournamentService.RegisterForTournament(username, registerDto, tournamentId);
      return Ok(tournament);
    }

    [HttpGet("get-my-tournaments")]
    public IActionResult GetUsersOwnedTournaments()
    {
      string username = GetUsername();
      return Ok(tournamentService.GetAdminUsersTournaments(username));
    }

    [HttpPost("update-tournament")]
    public async Task<IActionResult> UpdateTournament(Tournament tournament)
    {
      var t = await tournamentRepository.UpdateTournament(tournament);
      return Ok(t);
    }

    private string GetUsername()
    {
      return User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value;
    }
  }
}