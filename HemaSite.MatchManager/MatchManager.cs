using System;
using HemaSite.MatchManager.Core;
using HemaSite.MatchManager.Data;
using HemaSite.MatchManager.Enum;

namespace HemaSite.MatchManager
{
  public interface IMatchManager
  {

  }
  public class MatchManager : IMatchManager
  {
    public MatchManager(MatchOptions options)
    {
      SelectAction(options.Action);
    }

    public MatchAction SelectAction(int actionType)
    {
      if (actionType.Equals(ActionsEnum.GenerateRandomMatches))
      {
        return new GenerateRandomMatch();
      }

      return null;
    }
  }
}
