using MongoDB.Driver;
using MyPersonalGallery.Models;
using MetadataExtractor;

namespace MyPersonalGallery.Services
{
  public class ImageService : IImageService
  {
    private readonly IMongoCollection<MongoImage> _imagesUrl;

    public ImageService(IGallerySettings gallerySettings, IMongoClient mongoClient)
    {

      var database = mongoClient.GetDatabase(gallerySettings.Database);
      _imagesUrl = database.GetCollection<MongoImage>(gallerySettings.Collection);
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
      try
      {
        return await _imagesUrl.Find(d => d.isThumbnail == true).ToListAsync();
      }
      catch (Exception e)
      {
        throw new InvalidOperationException("Could not get thumbnails: " + e.Message);
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

    public async Task<MongoImage> GetByName(string name)
    {
      try
      {
        return await _imagesUrl.Find(x => x.Title == name).FirstOrDefaultAsync();
      }
      catch (Exception e) { throw new InvalidOperationException("Could not find image: " + e.Message); }
    }
  }
}
