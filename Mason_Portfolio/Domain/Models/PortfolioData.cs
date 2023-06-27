namespace Mason_Portfolio.Domain.Models
{
    public class PortfolioData
    {
        PortfolioItemData[] PortfolioItems { get; }   
        AboutMeData AboutMeData { get; }
        ContactData ContactData { get; }

        public PortfolioData(PortfolioItemData[] portfolioItems, AboutMeData aboutMeData, ContactData contactData)
        {
            PortfolioItems = portfolioItems;
            AboutMeData = aboutMeData;
            ContactData = contactData;
        }
    }
}
