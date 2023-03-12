using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyPersonalGallery.Models;
using MyPersonalGallery.Services;

namespace MyPersonalGallery.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        public IImageService _imageService;

        public ImagesController(IImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet("get-all")]
        public ActionResult<List<ImageUrl>> GetAllImages()
        {
            var images = _imageService.GetAllImages();
            return Ok(images);
        }

        [HttpPost("insert")]
        public ActionResult<ImageUrl> InsertOne(ImageUrl imageUrl)
        {
            var result = _imageService.CreateOne(imageUrl);
            return Ok(result);
        }

        //[HttpGet]
        //public ActionResult Download()
        //{
        //    var bunnyCDNStorage = new BunnyCDNStorage("mygallery", "dbf09da0-1045-41d1-8bdeb58ae048-9f95-4e58", "de");
        //    await bunnyCDNStorage.DownloadObjectAsStreamAsync("/storagezonename/helloworld.txt");
        //    return Ok();
        //}
    }
}
