using System;
using System.Collections.Generic;
using HemaSite.DTO;

namespace HemaSite.MatchManager.Core
{
  public class GenerateRandomMatches : MatchAction
  {
    public GenerateRandomMatches(List<MatchDTO> SubmittedMatches)
    {
      Matches = ShuffleMatches(SubmittedMatches);
    }

    private List<MatchDTO> ShuffleMatches(List<MatchDTO> matches)
    {
      MatchDTO tempValue;
      Random random = new Random();
      int index = 0;
      int randomIndex;

      while (0 != index)
      {
        randomIndex = random.Next(0, matches.Count);
        tempValue = matches[index];
        matches[index] = matches[randomIndex];
        matches[randomIndex] = tempValue;
      }

      return matches;
    }

    private List<MatchDTO> AssignValuesToMatches(List<MatchDTO> matches)
    {
      return null;
    }
  }
}