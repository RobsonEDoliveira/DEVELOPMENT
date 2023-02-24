﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LanchesMac.Models
{
    [Table("tCategoria")]
    public class Categoria
    {
        [Key]
        public int CategoriaId { get; set; }

        [StringLength(100, ErrorMessage = "O tamanho máximo é 100 caracteres.")]
        [Required(ErrorMessage = "Informe o nome da categoria.")]
        [Display(Name = "Nome")]
        public string CategoriaNome { get; set; }

        [StringLength(200, ErrorMessage = "O tamanho máximo é 200 caracteres.")]
        [Required(ErrorMessage = "Informe o nome da descrição.")]
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }

        //RELACIONAMENTO
        public List<Lanche> Lanches { get; set; }
    }
}
