using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using TestVersta24.Server.Data.Models;
using TestVersta24.Server.Services.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace TestVersta24.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersService _ordersService;
        private readonly IMapper _mapper;

        public OrdersController(IOrdersService ordersService, IMapper mapper)
        {
            _ordersService = ordersService;
            _mapper = mapper;
        }

        [HttpPost]
        async public Task<IActionResult> Create(Order model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (model.Date < DateOnly.FromDateTime(DateTime.Now))
            {
                return BadRequest("The date must not be earlier than today");
            }

            return CreatedAtAction("Create", await _ordersService.Create(model));
        }

        [HttpGet("{id}")]
        async public Task<IActionResult> Get(int id)
        {
            var order = await _ordersService.Get(id);
            if (order is null)
            {
                return NotFound($"No order found for order id '{id}'.");
            }
            return Ok(order);
        }

        [HttpGet]
        async public Task<IActionResult> GetAll()
        {
            return Ok(await _ordersService.Get());
        }
    }
}
