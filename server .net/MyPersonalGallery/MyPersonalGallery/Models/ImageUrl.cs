using MongoDB.Bson.Serialization.Attributes;

namespace MyPersonalGallery.Models
{
    public class ImageUrl
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public int Id { get; set; }

        [BsonElement("url")]
        public string Url { get; set; } = string.Empty;
    }
}
