using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoPhaAPI.Controllers
{
    public class EffetController : Controller
    {
        // GET: EffetController
        public ActionResult Index()
        {
            return View();
        }

        // GET: EffetController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: EffetController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: EffetController/Create
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

        // GET: EffetController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: EffetController/Edit/5
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

        // GET: EffetController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: EffetController/Delete/5
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
