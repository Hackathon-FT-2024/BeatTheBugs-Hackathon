using CoPhaAPI.Data;
using CoPhaAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoPhaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]  // Déclare que cette classe est un contrôleur d'API
    [Authorize] // pour le token
    public class TypePopulationController : Controller
    {
        private readonly AppDbContext _context;

        // Injection du DbContext dans le contrôleur via le constructeur
        public TypePopulationController(AppDbContext context)
        {
            _context = context;
        }

        // 1. GET: api/typepopulations
        // Récupérer tous les types de population
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TypePopulation>>> GetTypePopulations()
        {
            return await _context.TypePopulations.ToListAsync();
        }

        // 2. GET: api/typepopulations/{id}
        // Récupérer un type de population par son Id
        [HttpGet("{id}")]
        public async Task<ActionResult<TypePopulation>> GetTypePopulation(int id)
        {
            var typePopulation = await _context.TypePopulations.FindAsync(id);

            if (typePopulation == null)
            {
                return NotFound();  // Retourne un 404 si le type de population n'est pas trouvé
            }

            return typePopulation;
        }

        // 3. POST: api/typepopulation
        // Ajouter un nouveau type de population
        [HttpPost]
        public async Task<ActionResult<Effet>> PostTypePopulation(TypePopulation typePopulation)
        {
            _context.TypePopulations.Add(typePopulation);
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base de données

            // Retourne un 201 Created avec l'URL du nouvel effet
            return CreatedAtAction(nameof(GetTypePopulation), new { id = typePopulation.Ident }, typePopulation);
        }

        // 4. PUT: api/typepopulation/{id}
        // Mettre à jour un type de population existant
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTypePopulation(int id, TypePopulation typePopulation)
        {
            if (id != typePopulation.Ident)
            {
                return BadRequest();  // Retourne un 400 Bad Request si l'Id ne correspond pas
            }

            _context.Entry(typePopulation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();  // Sauvegarde les modifications dans la base
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TypePopulationExists(id))
                {
                    return NotFound();  // Retourne un 404 si l'effet n'existe pas
                }
                else
                {
                    throw;  // Relance l'exception si une autre erreur se produit
                }
            }

            return NoContent();  // Retourne un 204 No Content si la mise à jour est réussie
        }

        // 5. DELETE: api/typepopulation/{id}
        // Supprimer un type de population par son Id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTypePopulation(int id)
        {
            var typePopulation = await _context.TypePopulations.FindAsync(id);
            if (typePopulation == null)
            {
                return NotFound();  // Retourne un 404 si le produit n'existe pas
            }

            _context.TypePopulations.Remove(typePopulation);  // Supprime l'effet
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base

            return NoContent();  // Retourne un 204 No Content après la suppression
        }

        // Méthode auxiliaire pour vérifier l'existence d'un produit
        private bool TypePopulationExists(int id)
        {
            return _context.Effets.Any(e => e.Ident == id);
        }
    }
}
