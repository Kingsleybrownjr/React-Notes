using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Note
{
    [Key]
    public long Id { get; set; }
    public string? Value { get; set; }
}
