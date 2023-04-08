namespace MyPersonalGallery.Models
{
    public interface IGallerySettings
    {
        string ConnectionString { get; set; }
        string Database { get; set; }
        string Collection { get; set; }

    }
}
