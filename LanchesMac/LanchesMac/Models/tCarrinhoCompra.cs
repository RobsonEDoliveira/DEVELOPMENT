using LanchesMac.Context;
using LanchesMac.Migrations;
using Microsoft.AspNetCore.Http;

namespace LanchesMac.Models
{
    public class tCarrinhoCompra
    {
        private readonly AppDbContext _context;

        public tCarrinhoCompra(AppDbContext context)
        {
            _context = context;
        }

        public string CarrinhoCompraId { get; set; }
        public List<CarrinhoCompraItem> CarrinhoCompraItens { get; set; }

        public static tCarrinhoCompra GetCarrinho(IServiceProvider services)
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
            return new tCarrinhoCompra(context)
            {
                CarrinhoCompraId = carrinhoId
            };
        }
    }
}
