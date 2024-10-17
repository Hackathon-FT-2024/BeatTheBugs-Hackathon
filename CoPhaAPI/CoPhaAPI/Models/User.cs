using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class User
    {
        [Key]
        public int Ident { get; set; }
        public required string NomUtilisateur { get; set; }
        public required string MotDePasse { get; set; }
    }
}
