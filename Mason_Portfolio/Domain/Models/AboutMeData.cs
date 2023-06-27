namespace Mason_Portfolio.Domain.Models
{
    public class AboutMeData
    {
        String AboutMeText { get; }

        public AboutMeData(String aboutMeText)
        {
            AboutMeText = aboutMeText ?? String.Empty;
        }
    }
}
