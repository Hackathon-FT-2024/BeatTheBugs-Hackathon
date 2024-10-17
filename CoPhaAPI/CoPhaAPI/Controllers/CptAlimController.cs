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
    public class CptAlimController : Controller
    {
        private readonly AppDbContext _context;

        // Injection du DbContext dans le contrôleur via le constructeur
        public CptAlimController(AppDbContext context)
        {
            _context = context;
        }

        // 1. GET: api/cptalim
        // Récupérer tous les compléments alimentaires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CptAlim>>> GetCptAlims()
        {
#pragma warning disable CS8620 // Impossible d'utiliser l'argument pour le paramètre, car il existe des différences dans l'acceptation des valeurs null par les types référence.
            return await _context.CptAlims
    .Include(c => c.RelCptEffets)              
    .ThenInclude(ce => ce.Effet).Where(p => p.RelCptEffets != null && p.RelCptEffets.Any())
    .Include(c => c.RelCptPops)
    .ThenInclude(cp => cp.TypePopulation).Where(p => p.RelCptPops != null && p.RelCptPops.Any())
    .ToListAsync();
#pragma warning restore CS8620 // Impossible d'utiliser l'argument pour le paramètre, car il existe des différences dans l'acceptation des valeurs null par les types référence.
        }

        // 2. GET: api/cptalim/{id}
        // Récupérer un complément alimentaire par son Id
        [HttpGet("{id}")]
        public async Task<ActionResult<CptAlim>> GetCptAlim(int id)
        {
            var cptAlim = await _context.CptAlims.FindAsync(id);

            if (cptAlim == null)
            {
                return NotFound();  // Retourne un 404 si l n'est pas trouvé
            }

            return cptAlim;
        }




        // 2. GET: api/cptalim/filter/{filter}
        // Récupérer un complément alimentaire par 
        // [HttpGet("{id}")]
        //public async Task<ActionResult<Effet>> GetCptAlim(int id)
        //{
        //    var cptAlim = await _context.CptAlims.FindAsync(id);

        //    if (cptAlim == null)
        //    {
        //        return NotFound();  // Retourne un 404 si l n'est pas trouvé
        //    }

        //    return cptAlim;
        //}
        // FILTRE A FAIRE !!!!

        // + Pour le GET ajouter les images !!!

        // 3. POST: api/cptalim
        // Ajouter un nouveau complément alimentaire
        [HttpPost]
        public async Task<ActionResult<CptAlim>> PostCptAlim(CptAlim cptAlim)
        {
            _context.CptAlims.Add(cptAlim);
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base de données

            // Retourne un 201 Created avec l'URL du nouveau complément alimentaire
            return CreatedAtAction(nameof(GetCptAlim), new { id = cptAlim.Ident }, cptAlim);
        }

        // 4. PUT: api/cptalim/{id}
        // Mettre à jour un complément alimentaire
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCptAlim(int id, CptAlim cptAlim)
        {
            if (id != cptAlim.Ident)
            {
                return BadRequest();  // Retourne un 400 Bad Request si l'Id ne correspond pas
            }

            _context.Entry(cptAlim).State = EntityState.Modified;

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

        // 5. DELETE: api/cptalim/{id}
        // Supprimer un complément alimentaire par son Id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCptAlim(int id)
        {
            var cptAlim = await _context.CptAlims.FindAsync(id);
            if (cptAlim == null)
            {
                return NotFound();  // Retourne un 404 si le produit n'existe pas
            }

            _context.CptAlims.Remove(cptAlim);  // Supprime l'effet
            await _context.SaveChangesAsync();  // Sauvegarde les changements dans la base

            return NoContent();  // Retourne un 204 No Content après la suppression
        }

        // Méthode auxiliaire pour vérifier l'existence d'un complément alimentaire
        private bool EffetExists(int id)
        {
            return _context.CptAlims.Any(e => e.Ident == id);
        }
    }
}
