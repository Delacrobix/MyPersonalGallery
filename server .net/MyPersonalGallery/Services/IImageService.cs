using MyPersonalGallery.Models;

namespace MyPersonalGallery.Services
{
    public interface IImageService
    {
        List<ImageUrl> GetAllImages();

        ImageUrl GetById(string id);

        ImageUrl CreateOne(ImageUrl imageUrl);

        void DeleteById(string id);

        void UpdateById(string id, ImageUrl imageUrl);
    }
}
