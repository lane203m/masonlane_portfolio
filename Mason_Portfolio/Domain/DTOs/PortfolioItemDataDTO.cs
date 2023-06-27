using System.ComponentModel.DataAnnotations;

namespace Mason_Portfolio.Domain.DTOs
{
    public class PortfolioItemDataDTO
    {
        [Required] public Int32 ItemId { get; set; }
        [Required] public String ItemName { get; set; }
        public String ItemDescription { get; set; }
        [Required] public String ItemImage { get; set; }
        public ButtonLinkDataDTO[] ItemLinks { get; set; }

        public PortfolioItemDataDTO(int itemId, string itemName, string itemDescription, string itemImage, ButtonLinkDataDTO[] itemLinks)
        {
            ItemId = itemId;
            ItemName = itemName;
            ItemDescription = itemDescription;
            ItemImage = itemImage;
            ItemLinks = itemLinks;
        }
    }
}
