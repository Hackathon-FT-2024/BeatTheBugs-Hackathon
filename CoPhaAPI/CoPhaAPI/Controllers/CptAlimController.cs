using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoPhaAPI.Controllers
{
    public class CptAlimController : Controller
    {
        // GET: CptAlimController
        public ActionResult Index()
        {
            return View();
        }

        // GET: CptAlimController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CptAlimController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CptAlimController/Create
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

        // GET: CptAlimController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CptAlimController/Edit/5
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

        // GET: CptAlimController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CptAlimController/Delete/5
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
