using MyPersonalGallery.Models;

namespace MyPersonalGallery.Services
{
  public interface IImageService
  {
    Task<IEnumerable<MongoImage>> GetAllImages();

    Task<IEnumerable<MongoImage>> GetAllThumbnails();

    Task<String> saveImagesToRedis(List<MongoImage> images);

    Task<MongoImage> GetById(string id);

    Task<MongoImage> GetByName(string name);

    byte[] GetImageData(string path);

    Task<MongoImage> InsertImage(MongoImage image);

    IEnumerable<MongoImage> GetImagesInfo(string galleryPath);
  }
}
