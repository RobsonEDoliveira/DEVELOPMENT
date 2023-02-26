using LanchesMac.Context;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac.Models
{
    public class CarrinhoCompra
    {
        private readonly AppDbContext _context;

        public CarrinhoCompra(AppDbContext context)
        {
            _context = context;
        }

        public string CarrinhoCompraId { get; set; }
        public List<tCarrinhoCompraItem> CarrinhoCompraItens { get; set; }

        public static CarrinhoCompra GetCarrinho(IServiceProvider services)
        {
            // DEFINE UMA SESSÃO
            ISession session =
                services.GetRequiredService<IHttpContextAccessor>()?.HttpContext.Session; ;

            // OBTEM UM SERVIÇO DO TIPO DO NOSSO CONTEXTO
            var context = services.GetService<AppDbContext>();

            // OBTEM OU GERA O ID DO CARRINHO
            string carrinhoId = session.GetString("CarrinhoId") ?? Guid.NewGuid().ToString();

            // ATRIBUI O ID DO CARRINHO NA SESSÃO
            session.SetString("CarrinhoId", carrinhoId);

            // RETORNA O CARRINHO COM O CONTEXTO E O ID ATRIBUIDO OU OBTIDO
            return new CarrinhoCompra(context)
            {
                CarrinhoCompraId = carrinhoId
            };
        }

        public void AdicionarAoCarrinho(tLanche lanche)
        {
            var carrinhoCompraItem = _context.CarrinhoCompraItens.SingleOrDefault(
                s => s.Lanche.LancheId == lanche.LancheId &&
                s.CarrinhoCompraId == CarrinhoCompraId);

            // SE NÃO EXISTE, ADICIONO 1 NO CARRINHO
            if (carrinhoCompraItem == null)
            {
                carrinhoCompraItem = new tCarrinhoCompraItem
                {
                    CarrinhoCompraId = CarrinhoCompraId,
                    Lanche = lanche,
                    Quantidade = 1
                };
            }
            else
            {
                // SE JÁ EXISTE SÓ INCREMENTO +1
                carrinhoCompraItem.Quantidade++;
            }
            _context.SaveChanges();
        }

        public int RemoverDoCarrinho(tLanche lanche)
        {
            // VERIFICO SE O LANCHE EXISTE NA TABELA
            var carrinhoCompraItem = _context.CarrinhoCompraItens.SingleOrDefault(
                s => s.Lanche.LancheId == lanche.LancheId &&
                s.CarrinhoCompraId == CarrinhoCompraId);

            var quantidadeLocal = 0;

            // SE FOR DIFERENTE DE NULL
            if (carrinhoCompraItem != null)
            {
                if (carrinhoCompraItem.Quantidade > 1)
                {
                    carrinhoCompraItem.Quantidade--;
                    quantidadeLocal = carrinhoCompraItem.Quantidade;
                }
                else
                {
                    _context.CarrinhoCompraItens.Remove(carrinhoCompraItem);
                }
            }
            _context.SaveChanges();
            return quantidadeLocal;
        }

        public List<tCarrinhoCompraItem> GetCarrinhoCompraItens()
        {
            return CarrinhoCompraItens ??
                   (CarrinhoCompraItens = _context.CarrinhoCompraItens
                   .Where(c => c.CarrinhoCompraId == CarrinhoCompraId)
                   .Include(s => s.Lanche)
                   .ToList());
        }

        public void LimparCarrinho()
        {
            var carrinhoItens = _context.CarrinhoCompraItens
                               .Where(c => c.CarrinhoCompraId == CarrinhoCompraId);

            _context.CarrinhoCompraItens.RemoveRange(carrinhoItens);
            _context.SaveChanges();
        }

        public decimal GetCarrinhoCompraTotal()
        {
            var total = _context.CarrinhoCompraItens
                         .Where(c => c.CarrinhoCompraId == CarrinhoCompraId)
                         .Select(c => c.Lanche.Preco * c.Quantidade).Sum();

            return total;
        }
    }
}
