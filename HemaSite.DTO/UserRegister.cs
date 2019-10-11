using System.ComponentModel.DataAnnotations;

namespace HemaSite.DTO
{
  public class UserRegister
  {
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string Email { get; set; }
  }
}