
using Microsoft.AspNetCore.Mvc;
using MyPersonalGallery.Models;
using MyPersonalGallery.Models.DTOs;
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

    [HttpGet("works")]
    public IActionResult Get()
    {
      return Ok("MY GALLERY DOTNET WORKS");
    }

    [HttpGet("{id}")]
    public IActionResult GetImageById(string id)
    {
      if (String.IsNullOrEmpty(id) || id == ":id")
      {
        return BadRequest("The id cannot be empty.");
      }

      var image = _imageService.GetById(id);

      return Ok(image);
    }

    [HttpGet("getByName/{name}")]
    public async Task<ActionResult> GetImageByName(string name)
    {
      if (!string.IsNullOrEmpty(name))
      {
        var image = await _imageService.GetByName(name);
        return Ok(image);
      }
      else
      {
        return BadRequest("The name cannot be null or empty.");
      }
    }

    [HttpGet("get-all")]
    public async Task<ActionResult> GetAllImages()
    {
      var images = await _imageService.GetAllImages();
      return Ok(images);
    }

    [HttpGet("getThumbnails")]
    public async Task<ActionResult> GetThumbnails()
    {
      var thumbnails = await _imageService.GetAllThumbnails();
      return Ok(thumbnails);
    }

    [HttpPost("imageFolder")]
    public async Task<ActionResult> InsertImagesFromFolder([FromBody] PathModel path)
    {
      if (path is not null)
      {
        if (String.IsNullOrEmpty(path.path))
        {
          return BadRequest(new { Message = "Path cannot be empty." });
        }

        if (!Directory.Exists(path.path))
        {
          return BadRequest(new { Message = "Path doesn't exist in local." });
        }

        var imageList = _imageService.GetImagesInfo(path.path);

        foreach (var image in imageList)
        {
          await _imageService.InsertImage(image);
        }

        return Ok(imageList);
      }
      else
      {
        return BadRequest(new { Message = "Path cannot be null." });
      }
    }
  }
}
