using System.ComponentModel.DataAnnotations;

namespace TestVersta24.Server.Data.Models
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public string SenderCity { get; set; } = string.Empty;
        [Required]
        public string SenderAddress { get; set; } = string.Empty;
        [Required]
        public string RecipientCity { get; set; } = string.Empty;
        [Required]
        public string RecipientAddress { get; set; } = string.Empty;
        [Required]
        public float Weight { get; set; }
        [Required]
        public DateOnly Date { get; set; }
    }
}
