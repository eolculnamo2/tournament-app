using System;
using System.Collections.Generic;
using HemaSite.DTO;
using HemaSite.MatchManager.Core;
using HemaSite.MatchManager.Data;
using HemaSite.MatchManager.Enum;

namespace HemaSite.MatchManager
{
  public interface IMatchManagerFactory
  {

  }
  public class MatchManager : IMatchManagerFactory
  {
    public MatchManager(MatchOptions options)
    {
      SelectAction(options.Action, options.Tournament);
    }

    public MatchAction SelectAction(int actionType, TournamentDTO tournament)
    {
      switch (actionType)
      {
        case (int)ActionsEnum.GenerateRandomMatches:
          return new GenerateRandomMatches(tournament);
        default:
          return null;
      }
    }
  }
}
