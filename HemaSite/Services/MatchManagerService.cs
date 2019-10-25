using System;
using System.Collections.Generic;
using HemaSite.DTO;
using HemaSite.Models;

namespace HemaSite.Services
{
  // add service
  public interface IMatchManagerService {
    List<MatchDTO> AssignValuesToMatches(string eventName);

  }

  public class MatchManagerService : IMatchManagerService
  {
    //private TournamentDTO tournament { get; set; }
    private List<Competitor> competitors { get; set; }
    public MatchManagerService()
    {
     // this.tournament = tournament;
      //competitors = RandomizeCompetitors(tournament.Competitors);
    }

    private List<Competitor> RandomizeCompetitors(List<Competitor> competitors)
    {
      Competitor tempValue;
      Random random = new Random();
      int index = 0;
      int randomIndex;

      while (0 != index)
      {
        randomIndex = random.Next(0, competitors.Count);
        tempValue = competitors[index];
        competitors[index] = competitors[randomIndex];
        competitors[randomIndex] = tempValue;
      }

      return competitors;
    }

    public List<MatchDTO> AssignValuesToMatches(string eventName)
    {
      var newMatches = new List<MatchDTO>();

      for (int i = 0; i < competitors.Count; i++)
      {
        var match = new MatchDTO
        {
          Round = 1,
          Fighter1 = competitors[i].Username,
          Fighter2 = competitors[i + 1]?.Username ?? null,
          Event = eventName,
          Winner = null,
          //TournamentId = tournament.Id
        };

        newMatches.Add(match);
      }

      return newMatches;
    }
  }
}