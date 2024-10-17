using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class TypePopulation
    {
        [Key]
        public int Ident { get; set; }
        public string? Libelle { get; set; }

        public List<CptAlim>? ListComplement { get; set; }
    }
}
