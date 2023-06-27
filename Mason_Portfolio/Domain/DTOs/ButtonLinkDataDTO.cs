using System.ComponentModel.DataAnnotations;

namespace Mason_Portfolio.Domain.DTOs
{
    public class ButtonLinkDataDTO
    {
        [Required] public String RedirectLink { get; set; }
        [Required] public String[] FontAwesomeItemProp { get; set; }

        public ButtonLinkDataDTO(string redirectLink, string[] fontAwesomeItemProp)
        {
            RedirectLink = redirectLink;
            FontAwesomeItemProp = fontAwesomeItemProp;
        }
    }
}
