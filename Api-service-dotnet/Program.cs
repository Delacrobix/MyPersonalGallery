using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MyPersonalGallery.Models;
using MyPersonalGallery.Services;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<GallerySettings>(
    builder.Configuration.GetSection(nameof(GallerySettings))
);
builder.Services.AddSingleton<IGallerySettings>(
    sp => sp.GetRequiredService<IOptions<GallerySettings>>().Value
);

//Database connection
builder.Services.AddSingleton<IMongoClient>(
    s => new MongoClient(builder.Configuration.GetValue<string>("GallerySettings:MongoConnection"))
);

//Redis connection
var redisConfig = new ConfigurationOptions
{
    EndPoints = { builder.Configuration.GetValue<string>("GallerySettings:RedisEndpoint") },
    Password = builder.Configuration.GetValue<string>("GallerySettings:RedisPassword"),
    User = builder.Configuration.GetValue<string>("GallerySettings:RedisUser"),
    AbortOnConnectFail = false,
};

builder.Services.AddSingleton<IConnectionMultiplexer>(
    s => ConnectionMultiplexer.Connect(redisConfig)
);

builder.Services.AddScoped<IImageService, ImageService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "Policy_1",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:4000", "https://delacrobix.github.io")
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Policy_1");

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
