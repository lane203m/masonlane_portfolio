using System.ComponentModel.DataAnnotations;

namespace Mason_Portfolio.Domain.DTOs
{
    public class SocialMediaLinkDataDTO
    {
        [Required] public Int32 Id { get; set; }
        [Required] public String RedirectLink { get; set; }
        [Required] public String[] FontAwesomeItemProp { get; set; }
        [Required] public Int32 ParentId { get; set; }

        public SocialMediaLinkDataDTO(string redirectLink, string[] fontAwesomeItemProp, int id, int parentId)
        {
            RedirectLink = redirectLink;
            FontAwesomeItemProp = fontAwesomeItemProp;
            Id = id;
            ParentId = parentId;
        }
    }
}
