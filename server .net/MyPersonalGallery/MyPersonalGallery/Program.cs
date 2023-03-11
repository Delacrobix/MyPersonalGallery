using Microsoft.Extensions.Options;
using MyPersonalGallery.Controllers;
using MyPersonalGallery.Models;
using MyPersonalGallery.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.Configure<GallerySettings>(Configuration.GetSection(nameof(GallerySettings)));

builder.Services.AddSingleton<ImageService>();
builder.Services.AddTransient<ImagesController>();
builder.Services.AddSingleton<IGallerySettings>( d => d.GetRequiredService<IOptions<GallerySettings>>().Value);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
