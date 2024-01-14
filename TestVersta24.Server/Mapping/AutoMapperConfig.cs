using TestVersta24.Server.Data.Models;
using AutoMapper;
using TestVersta24.Server.ViewModels;

namespace TestVersta24.Server.Mapping
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Order, OrderViewModel>().ReverseMap();
        }
    }
}
