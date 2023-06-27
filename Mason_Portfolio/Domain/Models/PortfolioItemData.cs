namespace Mason_Portfolio.Domain.Models
{
    public class PortfolioItemData
    {
        Int32 ItemId { get; }
        String ItemName { get; }
        String ItemDescription { get; }
        String ItemImage { get; }
        ButtonLinkData[] ItemLinks { get; }

        public PortfolioItemData(
            Int32 itemId,
            String itemName, 
            String itemDescription, 
            String itemImage, 
            ButtonLinkData[] itemLinks)
        {
            ItemId = itemId;
            ItemName = itemName ?? String.Empty;
            ItemDescription = itemDescription ?? String.Empty;
            ItemImage = itemImage ?? String.Empty;
            ItemLinks = itemLinks;
        }
    }
}
