using CoPhaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic.FileIO;
using System.Numerics;

namespace CoPhaAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<CptAlim> CptAlims { get; set; }
        public DbSet<Effet> Effets { get; set; }
        public DbSet<RelCptEffet> RelCptEffets { get; set; }
        public DbSet<TypePopulation> TypePopulations { get; set; }
        public DbSet<RelCptPop> RelCptPops { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
       : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<RelCptEffet>()
                .HasKey(rce => new { rce.IdentCpt, rce.IdentEffet });
            modelBuilder.Entity<RelCptEffet>()
                .HasOne(rce => rce.CptAlim)
                .WithMany(ca => ca.RelCptEffets)
                .HasForeignKey(rce => rce.IdentCpt);
            modelBuilder.Entity<RelCptEffet>()
                .HasOne(rce => rce.Effet)
                .WithMany(e => e.RelCptEffets)
                .HasForeignKey(rce => rce.IdentEffet);

            modelBuilder.Entity<RelCptPop>()
                .HasKey(rcp => new { rcp.IdentCpt, rcp.IdentPopulation });
            modelBuilder.Entity<RelCptPop>()
                .HasOne(rcp => rcp.CptAlim)
                .WithMany(ca => ca.RelCptPops)
                .HasForeignKey(rcp => rcp.IdentCpt);
            modelBuilder.Entity<RelCptPop>()
                .HasOne(rcp => rcp.TypePopulation)
                .WithMany(tp => tp.RelCptPops)
                .HasForeignKey(rcp => rcp.IdentPopulation);

            modelBuilder.Entity<CptAlim>().HasData(GetCptAlims());
        }

        private static IEnumerable<CptAlim> GetCptAlims()
        {
            string[] p = { Directory.GetCurrentDirectory(), "Import", "liste2.csv" };
            var csvFilePath = Path.Combine(p);
            var cptAlims = new List<CptAlim>();

            using (var reader = new StreamReader(csvFilePath))
            {
                using (var parser = new TextFieldParser(reader))
                {
                    parser.SetDelimiters(";");
                    parser.HasFieldsEnclosedInQuotes = true;

                    int idToIncrement = 1;
                    while (!parser.EndOfData)
                    {
                        var values = parser.ReadFields();
                        if (values != null)
                        {
                            if (values[0].Contains("NomCommercial")) continue; //c'est l'entête donc on passe à la ligne suivante

                            var cptAlim = new CptAlim
                            {
                                Ident = idToIncrement,
                                Nom = values[0],
                                Marque = values[1],
                                FormeGalenique = values[2],
                                Responsable = values[3],
                                DoseJournaliere = values[4],
                                ModeEmploi = values[5],
                                MisesEnGarde = values[6],
                                Gamme = values[7],
                                Aromes = values[8],
                                PopulationARisques = values[9],
                                Plantes = values[10],
                                FamillePlantes = values[11],
                                PartiePlante = values[12],
                                AutresIngredients = values[13],
                                ObjectifEffets = values[14],
                                Image = null
                            };
                            cptAlims.Add(cptAlim);
                            idToIncrement++;
                        }
                    }
                }
            }

            return cptAlims;
        }
    }
}
