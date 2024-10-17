using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class TypePopulation
    {
        [Key]
        public int Ident { get; set; }
        public string? Libelle { get; set; }

        public ICollection<RelCptPop>? RelCptPops { get; set; }
    }
}
