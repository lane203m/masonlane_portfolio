namespace Mason_Portfolio.Domain.Models
{
    public class RegionData
    {
        String City { get; }
        String Province {get; }
        String Country { get; }

        public RegionData(string city, string province, string country)
        {
            City = city ?? String.Empty;
            Province = province ?? String.Empty;
            Country = country ?? String.Empty;
        }
    }
}
