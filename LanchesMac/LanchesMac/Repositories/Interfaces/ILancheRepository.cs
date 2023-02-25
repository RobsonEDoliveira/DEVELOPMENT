using LanchesMac.Models;

namespace LanchesMac.Repositories.Interfaces
{
    public interface ILancheRepository
    {
        IEnumerable<tLanche> Lanches { get; }
        IEnumerable<tLanche> LanchesPreferidos { get; }
        tLanche GetLancheById (int lancheId);
    }
}
