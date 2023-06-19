using Microsoft.AspNetCore.Mvc;
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
    public async Task<ActionResult> GetImageById(string id)
    {
      if (String.IsNullOrEmpty(id) || id == ":id")
      {
        return BadRequest("The id cannot be empty.");
      }
      else
      {
        var image = await _imageService.GetById(id);
        return Ok(image);
      }
    }

    [HttpGet("getByTitle/{title}")]
    public async Task<ActionResult> GetImageByTitle(string title)
    {
      if (string.IsNullOrEmpty(title) || title == ":title")
      {
        return BadRequest("The title cannot be null or empty.");
      }
      else
      {
        var image = await _imageService.GetByTitle(title);

        if (image is null)
        {
          return BadRequest("Title does not exist.");
        }
        else
        {
          return Ok(image);
        }
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
