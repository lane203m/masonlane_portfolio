namespace Mason_Portfolio.Models
{
    public class SocialMediaLinkData
    {
        public Int32 id { get; set; }
        public String RedirectLink { get; set; }
        public String IconFamily { get; set; }
        public String IconName { get; set; }
        public Int32 parentId { get; set; }
    }
}
