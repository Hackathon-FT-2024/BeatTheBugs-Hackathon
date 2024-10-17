using CoPhaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CoPhaAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<CptAlim> CptAlims { get; set; }
        public DbSet<Effet> Effets { get; set; }
        public DbSet<RelCptEffet> RelCptEffets { get; set; }
        public DbSet<TypePopulation> TypePopulations { get; set; }
        public DbSet<RelCptPop> RelCptPops { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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

            base.OnModelCreating(modelBuilder);
        }
    }
}
