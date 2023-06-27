namespace Mason_Portfolio.Domain.DTOs
{
    public class RegionDataDTO
    {
        public String City { get; }
        public String Province {get; }
        public String Country { get; }

        public RegionDataDTO(string city, string province, string country)
        {
            City = city;
            Province = province;
            Country = country;
        }
    }
}
