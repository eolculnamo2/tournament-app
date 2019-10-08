using System;
using System.Threading.Tasks;
using HemaSite.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace HemaSite.Data
{
  public interface IAuthRepository
  {
    Task<User> Register(User user, string password);
    Task<User> Login(string username, string password);
    Task<bool> UserExists(string username);
  }

  public class AuthRepository : IAuthRepository
  {
    public DataContext context { get; }
    public AuthRepository(DataContext context)
    {
      this.context = context;
    }

    public async Task<User> Register(User user, string password)
    {
      byte[] passwordHash, passwordSalt;

      // use out keyword to update value references
      // like a pointer?
      CreatePasswordHash(password, out passwordHash, out passwordSalt);

      user.PasswordHash = passwordHash;
      user.PasswordSalt = passwordSalt;

      await context.Users.AddAsync(user);
      await context.SaveChangesAsync();

      return user;
    }

    private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
      // using disposes of the HMCASHA512 reference after finished.
      using (var hmac = new HMACSHA512())
      {
        // these values automatically update their reference in parent because of the out keyword
        // in the parameters.
        passwordSalt = hmac.Key;
        passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
      }
    }
    public async Task<User> Login(string username, string password)
    {
      var user = await context.Users.FirstOrDefaultAsync(x => x.Username == username);
      if (user == null) return null;
      if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt)) return null;
      return user;
    }

    private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
      // create password hash from salt and password to see if it matches computedHash
      using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
      {
        var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

        for (int i = 0; i < computedHash.Length; i++)
        {
          if (computedHash[i] != passwordHash[i]) return false;
        }
      }
      return true;
    }

    public async Task<bool> UserExists(string username)
    {
      if (await context.Users.FirstOrDefaultAsync(x => x.Username == username) != null)
      {
        return true;
      }
      return false;
    }
  }
}