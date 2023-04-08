using MongoDB.Driver;
using MyPersonalGallery.Models;
using System.Diagnostics;

namespace MyPersonalGallery.Services
{
    public class ImageService : IImageService
    {
        private readonly IMongoCollection<ImageUrl> _imagesUrl;

        public ImageService(IGallerySettings gallerySettings, IMongoClient mongoClient)
        {

            var database = mongoClient.GetDatabase(gallerySettings.Database);
            _imagesUrl = database.GetCollection<ImageUrl>(gallerySettings.Collection);
        }

        public List<ImageUrl> GetAllImages()
        {
            return _imagesUrl.Find(d => true).ToList();
        }

        public ImageUrl GetById(string id)
        {
            return _imagesUrl.Find(x => x.Id == id).FirstOrDefault();
        }

        public ImageUrl CreateOne(ImageUrl imageUrl)
        {
            _imagesUrl.InsertOne(imageUrl);
            return imageUrl;
        }

        public void DeleteById(string id)
        {
            _imagesUrl.DeleteOne(x => x.Id == id);
        }

        public void UpdateById(string id, ImageUrl imageUrl)
        {
            _imagesUrl.ReplaceOne(x => x.Id == id, imageUrl);
        }
    }
}
