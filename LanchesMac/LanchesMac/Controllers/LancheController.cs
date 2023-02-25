using LanchesMac.Repositories.Interfaces;
using LanchesMac.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace LanchesMac.Controllers
{
    public class LancheController : Controller
    {
        // Para acessar o banco de dados é preciso acessar o "LancheRepository"
        private readonly ILancheRepository _lancheRepository;

        // Construtor com Injeção de Dependência
        public LancheController(ILancheRepository lancheRepository)
        {
            _lancheRepository = lancheRepository;
        }

        public IActionResult List()
        {
            var lanchesListViewModel = new LancheListViewModel();

            lanchesListViewModel.Lanches = _lancheRepository.Lanches.ToList();
            lanchesListViewModel.CategoriaAtual = "Categoria Atual";

            return View(lanchesListViewModel);


          /*  // ViewData e ViewBag tempo de vida, Request.
            ViewData["Titulo"] = "Todos os Lanches";
            ViewData["Data"] = DateTime.Now;

            var listarLanches = _lancheRepository.Lanches.ToList();
            var totalLanches = listarLanches.Count();

            ViewBag.Total = "Total de lanches";
            ViewBag.TotalLanches = totalLanches;

            return View(listarLanches);
          */
        }
    }
}
