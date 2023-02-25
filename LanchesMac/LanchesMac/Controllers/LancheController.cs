using LanchesMac.Repositories.Interfaces;
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
            var listarLanches = _lancheRepository.Lanches.ToList();
            return View(listarLanches);
        }
    }
}
