namespace Mason_Portfolio.Domain.DTOs
{
    public class ContactDataDTO
    {
        public ButtonLinkDataDTO[] ButtonLinks { get; set; }
        public RegionDataDTO RegionData { get; set; }
        public String PhoneNumber { get; set; }
        public String PersonalEmail { get; set; }

        public ContactDataDTO(ButtonLinkDataDTO[] buttonLinks, RegionDataDTO regionData, string phoneNumber, string personalEmail)
        {
            ButtonLinks = buttonLinks;
            RegionData = regionData;
            PhoneNumber = phoneNumber;
            PersonalEmail = personalEmail;
        }
    }
}
