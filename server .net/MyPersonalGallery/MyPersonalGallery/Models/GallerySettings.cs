namespace MyPersonalGallery.Models
{
    public class GallerySettings : IGallerySettings
    {
        public string Server { get; set; } = string.Empty;
        public string Database { get; set; } = string.Empty;
        public string Collection { get; set; } = string.Empty;

    }
}
