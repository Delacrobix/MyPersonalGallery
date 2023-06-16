using StackExchange.Redis;

namespace MyPersonalGallery.Redis
{
  public interface IRedisDB
  {
    ConnectionMultiplexer Connection { get; }
  }
}