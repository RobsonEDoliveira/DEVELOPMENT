using LanchesMac.Context;
using LanchesMac.Models;
using LanchesMac.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac.Repositories
{
    public class LancheRepository : ILancheRepository
    {
        private readonly AppDbContext _context;
        public LancheRepository(AppDbContext contexto)
        {
            _context = contexto;
        }

        public IEnumerable<tLanche> Lanches => _context.Lanches.Include(c => c.Categoria);

        public IEnumerable<tLanche> LanchesPreferidos => _context.Lanches.Where(l => l.IsLanchePreferido)
                                                                         .Include(c => c.Categoria);

        public tLanche GetLancheById(int lancheId)
        {
          return _context.Lanches.FirstOrDefault(l => l.LancheId == lancheId);
        }
    }
}
