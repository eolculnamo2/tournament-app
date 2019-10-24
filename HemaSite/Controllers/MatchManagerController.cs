using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using HemaSite.Models;

namespace HemaSite.Controllers {
  [Route ("api/[controller]")]
  [ApiController]
  public class MatchManagerController {

    private readonly MatchManagerService matchManagerService;

    public MatchManagerController (MatchManagerService matchManagerService) {
      this.matchManagerService = matchManagerService;
    }

    [HttpGet("generate-matches")]
    public void GenerateMatches(int tournamentId) {
        //WIP -- Find tournament and add matches
    }
  }
}