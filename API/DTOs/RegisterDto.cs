using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace API.DTOs;

public class RegisterDto
{

    [Required]
    [NotNull]
    public string DisplayName { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    [Required]
    [MinLength(4)]
    public string Password { get; set; } = "";

}
