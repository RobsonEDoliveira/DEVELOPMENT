using LanchesMac.Models;

namespace LanchesMac.Repositories.Interfaces
{
    public interface ICategoriaRepository
    {
        // DEFINIDO UM CONTRATO QUE DEVERÁ SER IMPLEMENTADO PELA CLASSE CONCRETA
        // RETORNO DE UMA COLEÇÃO DE CATEGORIA
        IEnumerable<tCategoria> Categorias { get; }
    }
}
