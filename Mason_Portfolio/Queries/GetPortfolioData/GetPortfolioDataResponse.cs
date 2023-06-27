using Mason_Portfolio.Domain.DTOs;
using System.ComponentModel.DataAnnotations;

namespace Mason_Portfolio.Queries.GetPortfolioDataRequest
{
    public class GetPortfolioDataResponse
    {
        [Required] PortfolioDataDTO PortfolioData { get; set; }

        public GetPortfolioDataResponse(PortfolioDataDTO portfolioData)
        {
            PortfolioData = portfolioData ?? throw new ArgumentNullException(nameof(portfolioData));
        }
    }
}
