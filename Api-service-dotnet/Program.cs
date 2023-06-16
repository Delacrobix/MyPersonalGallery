using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MyPersonalGallery.Models;
using MyPersonalGallery.Redis;
using MyPersonalGallery.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<GallerySettings>(builder.Configuration.GetSection(nameof(GallerySettings)));
builder.Services.AddSingleton<IGallerySettings>(sp => sp.GetRequiredService<IOptions<GallerySettings>>().Value);
builder.Services.AddSingleton<IMongoClient>(s => new MongoClient(builder.Configuration.GetValue<string>("GallerySettings:ConnectionString")));
builder.Services.AddScoped<IRedisDB, RedisDB>();
builder.Services.AddScoped<IImageService, ImageService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
  options.AddPolicy("politica_1",
      policy =>
      {
        policy.WithOrigins("http://localhost:4000", "https://delacrobix.github.io/MyPersonalGallery/")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin();
      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors("politica_1");

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();