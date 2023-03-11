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
        public ImageService _imageService;

        public ImagesController(ImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet("get-all")]
        public ActionResult<List<ImageUrl>> GetAllImages()
        {
            var images = _imageService.GetAllImages();
            return Ok(images);
        }
    }
}
