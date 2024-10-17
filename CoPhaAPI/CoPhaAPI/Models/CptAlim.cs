using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class CptAlim
    {
        [Key]
        public int Ident { get; set; }
        public string? Nom { get; set; }
        public string? Marque { get; set; }
        public string? FormeGalenique { get; set; }
        public string? Responsable { get; set; }
        public string? DoseJournaliere { get; set; }
        public string? ModeEmploi { get; set; }
        public string? MisesEnGarde { get; set; }
        public string? Gamme { get; set; }
        public string? Aromes { get; set; }
        public List<TypePopulation>? PopulationRisque { get; set; }
        public string? Plantes { get; set; }
        public string? FamillePlantes { get; set; }
        public string? PartiePlante { get; set; }
        public List<string>? AutresIngredients { get; set; }
        public List<Effet>? ListEffets { get; set; }

        public string? Image { get; set; }

    }
}
