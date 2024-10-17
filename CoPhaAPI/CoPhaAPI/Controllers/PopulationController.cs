using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoPhaAPI.Controllers
{
    public class PopulationController : Controller
    {
        // GET: PopulationController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PopulationController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PopulationController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PopulationController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PopulationController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PopulationController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PopulationController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PopulationController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
