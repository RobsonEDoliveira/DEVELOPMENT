using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LanchesMac.Models
{
    [Table("tCarrinhoCompraItens")]
    public class tCarrinhoCompraItem
    {
        // Tenho que definir no Contexto
        [Key]
        public int CarrinhoCompraItemId { get; set; }
        public tLanche Lanche { get; set; }

        public int Quantidade { get; set; }

        [StringLength(200)]
        public string CarrinhoCompraId { get; set; }
    }
}
