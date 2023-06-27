using Mason_Portfolio.Domain.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Mason_Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PortfolioDataController : ControllerBase
    {
        private readonly ILogger<PortfolioDataController> _logger;

        public PortfolioDataController(ILogger<PortfolioDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public PortfolioDataDTO Get()
        {

            PortfolioDataDTO item = new PortfolioDataDTO(
                new PortfolioItemDataDTO[1] {
                    new PortfolioItemDataDTO(
                        1,
                        "Game",
                        "Test",
                        "https://img.itch.zone/aW1hZ2UvMjAwNzgwNS8xMTgwNjE0Ny5wbmc=/original/eHDzIP.png",
                        new ButtonLinkDataDTO[1] {new ButtonLinkDataDTO(
                            "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
                            new string[2] { "fab", "youtube" })
                        }
                    )

                },
                new AboutMeDataDTO("blah"),
                new ContactDataDTO(
                    new ButtonLinkDataDTO[1] { new ButtonLinkDataDTO(
                        "https://www.youtube.com/watch?v=X8avbciUP3c&ab_channel=narpy",
                        new string[2] { "fab", "youtube" })
                    },
                    new RegionDataDTO("blah", "blah2", "blah3"),
                    "blah",
                    "blah2"
                )
               );

            return item;

            /* return Enumerable.Range(1, 5).Select(index => new PortfolioDataDTO{ 
                Test = "test" 
            })
            .ToArray();*/
        }
    }
}