using LanchesMac.Models;

namespace LanchesMac.ViewModels
{
    public class HomeViewModel
    {
        // EXIBIR UMA LISTA DE LANCHES PREFERIDOS
        public IEnumerable<tLanche> LanchesPreferidos { get; set; }
    }
}
