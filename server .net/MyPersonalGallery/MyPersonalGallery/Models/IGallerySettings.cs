namespace MyPersonalGallery.Models
{
    public interface IGallerySettings
    {
        string Server { get; set; }
        string Database { get; set; }
        string Collection { get; set; }

    }
}
