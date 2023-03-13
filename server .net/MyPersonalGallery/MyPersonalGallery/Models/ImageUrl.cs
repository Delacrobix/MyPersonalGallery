using MongoDB.Bson.Serialization.Attributes;

namespace MyPersonalGallery.Models
{
    [BsonIgnoreExtraElements]
    public class ImageUrl
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("urlThumbnail")]
        public string UrlThumbnail { get; set; } = string.Empty;

        [BsonElement("urlFullScale")]
        public string UrlFullScale { get; set; } = string.Empty;

        [BsonElement("title")] 
        public string Title { get; set; } = String.Empty;
    }
}
