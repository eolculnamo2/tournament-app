using System.Threading.Tasks;
using HemaSite.Models;

namespace HemaSite.Data
{
  public interface IJudgesRepository
  {
    void CreateMatch(Match match);
  }
  public class JudgesRepository : IJudgesRepository
  {
    private readonly DataContext context;

    public JudgesRepository(DataContext context)
    {
      this.context = context;
    }

    public async void CreateMatch(Match match)
    {
      await context.Matches.AddAsync(match);
      await context.SaveChangesAsync();
    }
  }
}