using MongoDB.Bson.Serialization.Attributes;

namespace MyPersonalGallery.Models
{
    [BsonIgnoreExtraElements]
    public class ImageUrl
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("url")]
        public string Url { get; set; } = string.Empty;
    }
}
