using LanchesMac.Models;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<tCategoria> Categorias { get; set; }
        public DbSet<tLanche> Lanches { get; set; }
        public DbSet<tCarrinhoCompraItem> CarrinhoCompraItens { get; set; }

    }
}
