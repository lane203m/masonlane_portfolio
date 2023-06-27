namespace Mason_Portfolio.Domain.DTOs
{
    public class AboutMeDataDTO
    {
        public String AboutMeText { get; set; }

        public AboutMeDataDTO(string aboutMeText)
        {
            AboutMeText = aboutMeText;
        }
    }
}
