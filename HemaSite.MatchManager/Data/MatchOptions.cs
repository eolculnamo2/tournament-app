using System.Collections.Generic;
using HemaSite.DTO;
using HemaSite.MatchManager.Enum;

namespace HemaSite.MatchManager.Data
{
  public class MatchOptions
  {
    public int Action { get; set; }
    public List<MatchDTO> SubmittedMatches { get; set; }
  }
}