using MongoDB.Driver;
using MyPersonalGallery.Models;
using MetadataExtractor;
using System.Text.Json;
using StackExchange.Redis;

namespace MyPersonalGallery.Services
{
  public class ImageService : IImageService
  {
    private readonly IMongoCollection<MongoImage> _imagesUrl;
    private readonly IConnectionMultiplexer _redisDb;

    public ImageService(IGallerySettings gallerySettings, IMongoClient mongoClient, IConnectionMultiplexer redisDb)
    {
      var database = mongoClient.GetDatabase(gallerySettings.Database);
      _imagesUrl = database.GetCollection<MongoImage>(gallerySettings.Collection);

      _redisDb = redisDb;
    }

    public async Task<string> SaveImagesToRedis(List<MongoImage> images, string key)
    {
      var redisConnection = GetRedisDB();
      var jsonData = await GetAllRedisImages(key);

      if (String.IsNullOrEmpty(jsonData))
      {
        try
        {
          string jsonSaved = JsonSerializer.Serialize(images);
          await redisConnection.StringSetAsync(key, jsonSaved);

          return jsonSaved;
        }
        catch (Exception e)
        {
          throw new Exception("Error saving images to redis: " + e.Message);
        }
      }
      else
      {
        return jsonData;
      }
    }

    public async Task<string> SaveImageToRedis(MongoImage image, string key)
    {
      var redisConnection = GetRedisDB();
      var redisImage = await GetRedisFullScaleImageByKey(key);

      if (redisImage == null)
      {
        try
        {
          string jsonImage = JsonSerializer.Serialize(image);
          await redisConnection.StringSetAsync(key, jsonImage);

          return jsonImage;
        }
        catch (Exception e)
        {
          throw new Exception("Could not save the image to redis database: " + e.Message);
        }
      }
      else
      {
        return JsonSerializer.Serialize(redisImage);
      }
    }

    public async Task<string> GetAllRedisImages(string key)
    {
      var redisConnection = GetRedisDB();

      try
      {
        var jsonData = await redisConnection.StringGetAsync(key);

        if (jsonData.IsNull)
        {
          return "";
        }
        else
        {
          return jsonData;
        }
      }
      catch (Exception e)
      {
        throw new Exception("Could not access to redis key: " + e.Message);
      }
    }

    public async Task<MongoImage> GetRedisFullScaleImageByKey(string key)
    {
      var redisConnection = GetRedisDB();
      string jsonImages = await GetAllRedisImages(key);

      if (String.IsNullOrEmpty(jsonImages))
      {
        return null;
      }
      else
      {
        var image = JsonSerializer.Deserialize<MongoImage>(jsonImages);
        return image;
      }
    }

    public IDatabase GetRedisDB()
    {
      try
      {
        return _redisDb.GetDatabase();
        // return Task.FromResult(_redisDb.GetDatabase());
      }
      catch (Exception e)
      {
        throw new Exception("Cannot connect to redis database: ", e);
      }
    }

    public async Task<IEnumerable<MongoImage>> GetAllImages()
    {
      try
      {
        return await _imagesUrl.Find(d => true).ToListAsync();
      }
      catch (Exception e)
      {
        throw new InvalidOperationException("Could not get images: " + e.Message);
      }
    }

    public async Task<IEnumerable<MongoImage>> GetAllThumbnails()
    {
      var redisImages = await GetAllRedisImages("thumbs");

      if (!String.IsNullOrEmpty(redisImages))
      {
        var thumbnails = JsonSerializer.Deserialize<List<MongoImage>>(redisImages);

        return thumbnails;
      }
      else
      {
        try
        {
          var thumbnails = await _imagesUrl.Find(d => d.isThumbnail == true).ToListAsync();

          await SaveImagesToRedis(thumbnails, "thumbs");

          return thumbnails;
        }
        catch (Exception e)
        {
          throw new InvalidOperationException("Could not get thumbnails: " + e.Message);
        }
      }
    }

    //Get the byte data from the path specified
    public byte[] GetImageData(string path)
    {
      byte[] imageData;

      using (FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read))
      {
        using (MemoryStream ms = new MemoryStream())
        {
          fs.CopyTo(ms);
          imageData = ms.ToArray();
        }
      }

      return imageData;
    }

    public async Task<MongoImage> InsertImage(MongoImage image)
    {
      try
      {
        await _imagesUrl.InsertOneAsync(image);

        return image;
      }
      catch (Exception e)
      {
        throw new InvalidOperationException("Error saving image: " + e.Message);
      }
    }

    public IEnumerable<MongoImage> GetImagesInfo(string galleryPath)
    {
      string[] paths = System.IO.Directory.GetFiles(galleryPath);
      var imageInfoList = new List<MongoImage>();

      foreach (string path in paths)
      {
        var metadatos = ImageMetadataReader.ReadMetadata(path);

        var image = new MongoImage();

        //Getting the image metadata (tag and type)
        foreach (var directory in metadatos)
        {
          foreach (var tag in directory.Tags)
          {
            if (tag.Name == "Windows XP Keywords")
            {
              image.Tag = tag.Description;
            }

            if (tag.Name == "Windows XP Title")
            {
              if (tag.Description == "thumbnail")
              {
                image.isThumbnail = true;
              }
              else
              {
                image.isThumbnail = false;
              }
            }
          }
        }

        //Getting image title without the extension}
        image.Title = Path.GetFileNameWithoutExtension(path);
        image.ImageData = GetImageData(path);

        imageInfoList.Add(image);
      }

      return imageInfoList;
    }

    public async Task<MongoImage> GetById(string id)
    {
      try
      {
        return await _imagesUrl.Find(x => x.Id == id).FirstOrDefaultAsync();
      }
      catch (Exception e)
      {
        throw new InvalidOperationException("Could not find image: " + e.Message);
      }
    }

    public async Task<MongoImage> GetByTitle(string title)
    {
      var imageRedis = await GetRedisFullScaleImageByKey(title);

      if (!(imageRedis == null))
      {
        return imageRedis;
      }
      else
      {
        try
        {
          var imageDatabaseTask = _imagesUrl.Find(x => (x.Title == title) && (x.isThumbnail == false)).FirstOrDefaultAsync();
          var imageDatabase = await imageDatabaseTask;

          if (imageDatabase is null)
          {
            return imageDatabase;
          }
          else
          {
            await SaveImageToRedis(imageDatabase, imageDatabase.Title);
            return imageDatabase;
          }
        }
        catch (Exception e)
        {
          throw new InvalidOperationException("Could not find image: " + e.Message);
        }
      }
    }
  }
}
