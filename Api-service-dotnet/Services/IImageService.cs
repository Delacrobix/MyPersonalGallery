using MyPersonalGallery.Models;
using StackExchange.Redis;

namespace MyPersonalGallery.Services
{
  public interface IImageService
  {
    Task<IEnumerable<MongoImage>> GetAllImages();

    Task<IEnumerable<MongoImage>> GetAllThumbnails();

    Task<String> SaveImagesToRedis(List<MongoImage> images, string key);

    Task<string> GetAllRedisImages(string key);

    Task<MongoImage> GetRedisFullScaleImageByKey(string title);

    IDatabase GetRedisDB();

    Task<MongoImage> GetById(string id);

    Task<MongoImage> GetByTitle(string title);

    byte[] GetImageData(string path);

    Task<MongoImage> InsertImage(MongoImage image);

    IEnumerable<MongoImage> GetImagesInfo(string galleryPath);
  }
}
