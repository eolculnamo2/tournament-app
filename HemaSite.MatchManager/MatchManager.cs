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
      SelectAction(options.Action, options.SubmittedMatches);
    }

    public MatchAction SelectAction(int actionType, List<MatchDTO> submittedMatches)
    {
      switch (actionType)
      {
        case (int)ActionsEnum.GenerateRandomMatches:
          return new GenerateRandomMatches(submittedMatches);
        default:
          return null;
      }
    }
  }
}
