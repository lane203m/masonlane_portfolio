namespace Mason_Portfolio.Domain.Models
{
    public class ContactData
    {
        ButtonLinkData[] ButtonLinks { get; }
        RegionData RegionData { get; }
        String PhoneNumber { get; }
        String PersonalEmail { get; }

        public ContactData(
            ButtonLinkData[] buttonLinks, 
            RegionData regionData, 
            string phoneNumber, 
            string personalEmail)
        {
            ButtonLinks = buttonLinks;
            RegionData = regionData;
            PhoneNumber = phoneNumber ?? String.Empty;
            PersonalEmail = personalEmail ?? String.Empty;
        }
    }
}
