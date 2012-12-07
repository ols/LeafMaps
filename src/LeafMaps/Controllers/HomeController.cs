using System.Web.Mvc;

namespace LeafMaps.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			ViewBag.Message = "LeafMaps.";

			return View();
		}
	}
}
