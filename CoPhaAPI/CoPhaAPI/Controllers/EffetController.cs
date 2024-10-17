using CoPhaAPI.Data;
using CoPhaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoPhaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]  // Déclare que cette classe est un contrôleur d'API
    public class EffetController : ControllerBase
    {
        private readonly AppDbContext _context;

        // Injection du DbContext dans le contrôleur via le constructeur
        public EffetController(AppDbContext context)
        {
            _context = context;
        }

        // 1. GET: api/effets
        // Récupérer tous les effets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Effet>>> GetEffets()
        {
            return await _context.Effets.ToListAsync();
        }

        // 2. GET: api/effet/{id}
        // Récupérer un effet par son Id
        [HttpGet("{id}")]
        public async Task<ActionResult<Effet>> GetEffet(int id)
        {
            var effet = await _context.Effets.FindAsync(id);

            if (effet == null)
            {
                return NotFound();  // Retourne un 404 si l'effet n'est pas trouvé
            }

            return effet;
        }

        // 3. POST: api/effet
        // Ajouter un nouveau effet
        [HttpPost]
        public async Task<ActionResult<Effet>> PostEffet(Effet effet)
        {
            _context.Effets.Add(effet);
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base de données

            // Retourne un 201 Created avec l'URL du nouvel effet
            return CreatedAtAction(nameof(GetEffet), new { id = effet.Ident }, effet);
        }

        // 4. PUT: api/effet/{id}
        // Mettre à jour un effet existant
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEffet(int id, Effet effet)
        {
            if (id != effet.Ident)
            {
                return BadRequest();  // Retourne un 400 Bad Request si l'Id ne correspond pas
            }

            _context.Entry(effet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();  // Sauvegarde les modifications dans la base
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EffetExists(id))
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

        // 5. DELETE: api/effet/{id}
        // Supprimer un effet par son Id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEffet(int id)
        {
            var effet = await _context.Effets.FindAsync(id);
            if (effet == null)
            {
                return NotFound();  // Retourne un 404 si le produit n'existe pas
            }

            _context.Effets.Remove(effet);  // Supprime l'effet
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base

            return NoContent();  // Retourne un 204 No Content après la suppression
        }

        // Méthode auxiliaire pour vérifier l'existence d'un produit
        private bool EffetExists(int id)
        {
            return _context.Effets.Any(e => e.Ident == id);
        }
    }
}
