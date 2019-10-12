using System.Collections.Generic;
using HemaSite.DTO;

namespace HemaSite.MatchManager.Core
{
  public abstract class MatchAction
  {
    public List<MatchDTO> Matches { get; set; }
  }
}