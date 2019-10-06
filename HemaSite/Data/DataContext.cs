using HemaSite.Models;
using Microsoft.EntityFrameworkCore;

// migrations scaffolding command
// dotnet ef migrations add InitialCreate
// dotnet ef database update

namespace HemaSite.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    public DbSet<User> Users { get; set; }
  }
}