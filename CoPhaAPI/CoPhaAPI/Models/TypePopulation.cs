using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CoPhaAPI.Models
{
    public class TypePopulation
    {
        [Key]
        public int Ident { get; set; }
        public string? Libelle { get; set; }
        [JsonIgnore]
        public ICollection<RelCptPop>? RelCptPops { get; set; }
    }
}
