using System;
using StackExchange.Redis;

namespace MyPersonalGallery.Redis
{
  class RedisDB : IRedisDB
  {
    private Lazy<ConnectionMultiplexer> _lazyConnection;

    public ConnectionMultiplexer Connection
    {
      get
      {
        return _lazyConnection.Value;
      }
    }

    public RedisDB()
    {
      _lazyConnection = new Lazy<ConnectionMultiplexer>(() =>
        ConnectionMultiplexer.Connect("localhost")
      );
    }
  }
}