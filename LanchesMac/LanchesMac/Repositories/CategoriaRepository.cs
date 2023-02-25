using LanchesMac.Context;
using LanchesMac.Models;
using LanchesMac.Repositories.Interfaces;

namespace LanchesMac.Repositories
{
    // CLASSE CONCRETA
    public class CategoriaRepository : ICategoriaRepository
    {
        // INSTÂNCIA DO CONTEXTO PARA ACESSAR O BANCO DE DADOS
        private readonly AppDbContext _context;

        // CONSTRUTOR 
        public CategoriaRepository(AppDbContext context)
        {
            _context = context;
        }

        // ASSINATURA DA PROPRIEDADE CATEGORIA
        public IEnumerable<tCategoria> Categorias => _context.Categorias;
    }
}

/*
 * => Expression Bodied Member
 */