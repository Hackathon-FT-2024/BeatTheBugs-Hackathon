using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CoPhaAPI.Models
{
    public class Effet
    {
        [Key]
        public int Ident { get; set; }
        public string? NomEffet { get; set; }
        [JsonIgnore]
        public ICollection<RelCptEffet>? RelCptEffets { get; set; }
    }
}
