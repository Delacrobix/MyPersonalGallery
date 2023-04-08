using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyPersonalGallery.Models;
using MyPersonalGallery.Services;
using System.Diagnostics;

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

        [HttpGet("works")]
        public IActionResult Get()
        {
            var x = "Enviado";
            return Ok(x);
        }

        [HttpGet("{id}")]
        public IActionResult GetImageById(String id)
        {
            if(String.IsNullOrEmpty(id) || id == ":id")
            {
                return BadRequest("The id is empty.");
            }

            var image = _imageService.GetById(id);

            return Ok(image);
        }

        [HttpGet("get-all")]
        public ActionResult<List<ImageUrl>> GetAllImages()
        {
            var images = _imageService.GetAllImages();
            return Ok(images);
        }

        [HttpPost("insert-one")]
        public ActionResult<ImageUrl> InsertOne(ImageUrl imageUrl)
        {
            var result = _imageService.CreateOne(imageUrl);
            return Ok(result);
        }

        [HttpPost("insert")]
        public ActionResult<ImageUrl> Insert(List<ImageUrl> imageList)
        {
            foreach(var image in imageList)
            {
                try
                {
                    _imageService.CreateOne(image);
                } catch(Exception ex)
                {
                    Debug.WriteLine(ex.Message);
                    return BadRequest(ex.Message);
                }

            }

            return Ok(imageList);
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
