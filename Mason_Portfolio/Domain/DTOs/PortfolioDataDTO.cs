namespace Mason_Portfolio.Domain.DTOs
{
    public class PortfolioDataDTO
    {
        public PortfolioItemDataDTO[] PortfolioItems { get; set; }
        public AboutMeDataDTO AboutMeData { get; set; }
        public ContactDataDTO ContactData { get; set; }

        public PortfolioDataDTO(PortfolioItemDataDTO[] portfolioItems, AboutMeDataDTO aboutMeData, ContactDataDTO contactData)
        {
            PortfolioItems = portfolioItems;
            AboutMeData = aboutMeData;
            ContactData = contactData;
        }
    }
}
