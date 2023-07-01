using System.ComponentModel.DataAnnotations;

namespace Mason_Portfolio.Domain.DTOs
{
    public class PortfolioItemDataDTO
    {
        [Required] public String ItemName { get; set; }
        public String ItemDescription { get; set; }
        [Required] public Byte[] ItemImage { get; set; }
        public SocialMediaLinkDataDTO[] ItemLinks { get; set; }

        public PortfolioItemDataDTO(string itemName, string itemDescription, byte[] itemImage, SocialMediaLinkDataDTO[] itemLinks)
        {
            ItemName = itemName;
            ItemDescription = itemDescription;
            ItemImage = itemImage;
            ItemLinks = itemLinks;
        }
    }
}
