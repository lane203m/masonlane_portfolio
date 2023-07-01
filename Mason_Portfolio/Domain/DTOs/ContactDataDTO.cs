namespace Mason_Portfolio.Domain.DTOs
{
    public class ContactDataDTO
    {
        public SocialMediaLinkDataDTO[] ButtonLinks { get; set; }
        public RegionDataDTO RegionData { get; set; }
        public String ContactNumber { get; set; }
        public String ContactEmail { get; set; }

        public ContactDataDTO(SocialMediaLinkDataDTO[] buttonLinks, RegionDataDTO regionData, string contactNumber, string contactEmail)
        {
            ButtonLinks = buttonLinks;
            RegionData = regionData;
            ContactNumber = contactNumber;
            ContactEmail = contactEmail;
        }
    }
}
