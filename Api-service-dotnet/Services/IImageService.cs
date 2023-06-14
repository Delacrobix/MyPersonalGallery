using MyPersonalGallery.Models;

namespace MyPersonalGallery.Services
{
  public interface IImageService
  {
    Task<IEnumerable<MongoImage>> GetAllImages();

    Task<IEnumerable<MongoImage>> GetAllThumbnails();

    Task<MongoImage> GetById(string id);

    Task<MongoImage> GetByName(string name);

    byte[] GetImageData(string path);

    Task<MongoImage> InsertImage(MongoImage image);

    IEnumerable<MongoImage> GetImagesInfo(string galleryPath);
  }
}
