using MongoDB.Driver;
using MyPersonalGallery.Models;
using System.Diagnostics;

namespace MyPersonalGallery.Services
{
    public class ImageService
    {
        private readonly IMongoCollection<ImageUrl> _imageUrl;

        public ImageService(IGallerySettings gallerySettings)
        {
            //var database = mongoClient.GetDatabase(gallerySettings.Server);
            Debug.WriteLine("DATA 1: ", gallerySettings.Server);
            Debug.WriteLine("DATA 2: ", gallerySettings.Collection);
            Debug.WriteLine("DATA 3: ", gallerySettings.Database);

            var client = new MongoClient(gallerySettings.Server);
            var database = client.GetDatabase(gallerySettings.Database);

            _imageUrl = database.GetCollection<ImageUrl>(gallerySettings.Collection);
        }

        public List<ImageUrl> GetAllImages()
        {
            return _imageUrl.Find(d => true).ToList();
        }
    }
}
