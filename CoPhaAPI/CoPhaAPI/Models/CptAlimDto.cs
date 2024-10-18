namespace CoPhaAPI.Models
{
    public class CptAlimDto
    {
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
        public string? PopulationARisques { get; set; }
        public string? Plantes { get; set; }
        public string? FamillePlantes { get; set; }
        public string? PartiePlante { get; set; }
        public string? AutresIngredients { get; set; }
        public string? ObjectifEffets { get; set; }

        public string? Image { get; set; }
        public List<TypePopulationDto>? TypePopulationDtos { get; set; }
        public List<EffetDto>? EffetDtos { get; set; }
    }
}
