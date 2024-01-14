using TestVersta24.Server.Data.Models;
using TestVersta24.Server.ViewModels;

namespace TestVersta24.Server.Services.Interfaces
{
    public interface IOrdersService
    {
        Task<Order> Create(Order model);

        Task<Order> Get(int id);

        Task<List<Order>> Get();

    }
}
