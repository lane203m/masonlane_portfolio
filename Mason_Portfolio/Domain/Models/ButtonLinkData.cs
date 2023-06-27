namespace Mason_Portfolio.Domain.Models
{
    public class ButtonLinkData
    {
        String RedirectLink { get; }
        String[] FontAwesomeItemProp {get;}

        public ButtonLinkData(String redirectLink, String[] fontAwesomeItemProp)
        {
            RedirectLink = redirectLink ?? throw new ArgumentNullException(nameof(redirectLink)); ;
            FontAwesomeItemProp = fontAwesomeItemProp.Length == 2 ? fontAwesomeItemProp : throw new ArgumentNullException(nameof(fontAwesomeItemProp));
        }
    }
}
