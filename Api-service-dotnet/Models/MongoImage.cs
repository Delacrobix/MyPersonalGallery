using MongoDB.Bson.Serialization.Attributes;

namespace MyPersonalGallery.Models
{
  [BsonIgnoreExtraElements]
  public class MongoImage
  {
    [BsonId]
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("title")]
    public string Title { get; set; } = String.Empty;

    [BsonElement("tag")]
    public string Tag { get; set; } = String.Empty;

    [BsonElement("isThumbnail")]
    public bool isThumbnail { get; set; }

    [BsonElement("ImageData")]
    public byte[] ImageData { get; set; }
  }
}
