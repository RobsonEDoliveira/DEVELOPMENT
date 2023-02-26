using LanchesMac.Models;
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

        public IActionResult List(string categoria)
{
            IEnumerable<tLanche> lanches;
            string categoriaAtual = string.Empty;

            // SE FOR VAZIO OU NULA NÃO PASSOU NENHUMA CATEGORIA
            if (string.IsNullOrEmpty(categoria))
            {
                lanches = _lancheRepository.Lanches.OrderBy(l => l.LancheId);
                categoriaAtual = "Todos os lanches";
            }
            else
            {
                // "StringComparison.OrdinalIgnoreCase" desconsidera caixa alta ou baixa
                if (string.Equals("Normal", categoria, StringComparison.OrdinalIgnoreCase))
                {
                    lanches = _lancheRepository.Lanches
                        .Where(l => l.Categoria.CategoriaNome.Equals("Normal"))
                        .OrderBy(l => l.Nome);
                }
                else
                {
                    lanches = _lancheRepository.Lanches
                       .Where(l => l.Categoria.CategoriaNome.Equals("Natural"))
                       .OrderBy(l => l.Nome);
                }
                categoriaAtual = categoria;
            }

            var lanchesListViewModel = new LancheListViewModel
            {
                Lanches = lanches,
                CategoriaAtual = categoriaAtual
            };

            return View(lanchesListViewModel);
        }
    }
}
