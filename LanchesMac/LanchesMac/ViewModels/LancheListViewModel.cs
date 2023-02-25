using LanchesMac.Models;

namespace LanchesMac.ViewModels
{
    public class LancheListViewModel
    {
        // PROPRIEDADE
        public IEnumerable<tLanche> Lanches { get; set; }
        public string CategoriaAtual { get; set; }
    }
}
