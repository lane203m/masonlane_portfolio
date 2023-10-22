using Mason_Portfolio.Data;
using Mason_Portfolio.Domain.DTOs;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using Mason_Portfolio.Domain.DTOs;


namespace Mason_Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PortfolioDataController : ControllerBase
    {
        private readonly ILogger<PortfolioDataController> _logger;
        private IWebHostEnvironment _env;
        private readonly Mason_PortfolioContext _context;
        private readonly MySqlConnection _connection;
        public PortfolioDataController(ILogger<PortfolioDataController> logger, IWebHostEnvironment env, Mason_PortfolioContext context, MySqlConnection connection)
        {
            _logger = logger;
            _env = env;
            _context = context;
            _connection = connection;
        }

        [HttpGet]
        public  PortfolioDataDTO Get()
        {
            _connection.Open();

            var rootPath = _env.ContentRootPath;


            using var aboutMeCommand = new MySqlCommand("SELECT * FROM AboutMeData;", _connection);
            using var aboutMeReader = aboutMeCommand.ExecuteReader();
            aboutMeReader.Read();
            var aboutMeMdLocation = aboutMeReader.GetValue(1).ToString();

            string aboutMeMD = System.IO.File.ReadAllText(Path.Combine(rootPath, "../" + aboutMeMdLocation));
            var aboutMe = new AboutMeDataDTO(aboutMeMD);

            _connection.Close();
            _connection.Open();
            
            using var contactCommand = new MySqlCommand("SELECT * FROM ContactInformationData;", _connection);
            using var contactReader = contactCommand.ExecuteReader();
            contactReader.Read();

            var contactId = contactReader.GetValue(0).ToString();
            var contactNumber = contactReader.GetValue(1).ToString();
            var contactEmail = contactReader.GetValue(2).ToString();
            var city = contactReader.GetValue(3).ToString();
            var province = contactReader.GetValue(4).ToString();
            var country = contactReader.GetValue(5).ToString();

            _connection.Close();
            _connection.Open();

            using var socialMediaLinksCommand = new MySqlCommand($"SELECT * FROM SocialMediaLinkData;", _connection);
            using var socialMediaLinksReader = socialMediaLinksCommand.ExecuteReader();
            List<SocialMediaLinkDataDTO> socialMediaLinks = new List<SocialMediaLinkDataDTO>();

            while (socialMediaLinksReader.Read())
            {
                var Id = socialMediaLinksReader.GetValue(0).ToString();
                var RedirectLink = socialMediaLinksReader.GetValue(1).ToString();
                var IconFamily = socialMediaLinksReader.GetValue(2).ToString();
                var IconName = socialMediaLinksReader.GetValue(3).ToString();
                var ParentId = socialMediaLinksReader.GetValue(4).ToString();

                string[] fontAwesomeIconProp = { IconFamily, IconName };

                socialMediaLinks.Add(new SocialMediaLinkDataDTO(RedirectLink, fontAwesomeIconProp, Int32.Parse(Id), Int32.Parse(ParentId)));
            }

            List<SocialMediaLinkDataDTO> contactLinks = socialMediaLinks.FindAll(social => social.ParentId == Int32.Parse(contactId));


            var contactData = new ContactDataDTO(
                contactLinks.ToArray(),
                new RegionDataDTO(city, province, country),
                contactNumber,
                contactEmail
            );

            _connection.Close();
            _connection.Open();

            using var portfolioItemsCommand = new MySqlCommand("SELECT * FROM PortfolioItemData;", _connection);
            using var portfolioItemsReader = portfolioItemsCommand.ExecuteReader();


            List<PortfolioItemDataDTO> portfolioItems = new List<PortfolioItemDataDTO>();
            while (portfolioItemsReader.Read())
            {
                var id = portfolioItemsReader.GetValue(0).ToString();
                var Name = portfolioItemsReader.GetValue(1).ToString();
                var DescriptionMdFileSystemLocation = portfolioItemsReader.GetValue(2).ToString();
                var ImageFileSystemLocation = portfolioItemsReader.GetValue(3).ToString();
                var ItemPriority = portfolioItemsReader.GetValue(4).ToString();
                string description = System.IO.File.ReadAllText(Path.Combine(rootPath, "../" + DescriptionMdFileSystemLocation));
                Byte[] image = System.IO.File.ReadAllBytes(Path.Combine(rootPath, "../" + ImageFileSystemLocation));


                List<SocialMediaLinkDataDTO> portfolioSocials = socialMediaLinks.FindAll(social => social.ParentId == Int32.Parse(id));



                portfolioItems.Add(new PortfolioItemDataDTO(Name, description, image, portfolioSocials.ToArray(), Int32.Parse(ItemPriority)));
            }


            PortfolioDataDTO item = new PortfolioDataDTO(portfolioItems.OrderBy(d => d.ItemPriority).ToArray(), aboutMe, contactData);

            _connection.Close();

            return item;

        }
    }
}