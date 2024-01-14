using Microsoft.EntityFrameworkCore;
using TestVersta24.Server.Data;
using TestVersta24.Server.Data.Models;
using TestVersta24.Server.Services.Interfaces;
using TestVersta24.Server.ViewModels;

namespace TestVersta24.Server.Services.Implementations
{
    public class OrdersService : IOrdersService
    {
        private AppDbContext _dbContext;
        public OrdersService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        async public Task<Order> Create(Order model)
        {
            await _dbContext.Orders.AddAsync(model);
            await _dbContext.SaveChangesAsync();

            return model;
        }

        async public Task<Order> Get(int id)
        {
            return await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);
        }

        async public Task<List<Order>> Get()
        {
            return await _dbContext.Orders.ToListAsync();
        }
    }
}
