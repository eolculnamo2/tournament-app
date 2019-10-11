using System;

namespace HemaSite.MatchManager
{
  public interface IMatchManager
  {

  }
  public class MatchManager : IMatchManager
  {
    public IMatch MyProperty { get; set; }
    public MatchManager()
    {

    }
  }
}
