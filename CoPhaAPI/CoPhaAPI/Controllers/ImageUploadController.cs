//using CoPhaAPI.Data;
//using CoPhaAPI.Models;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace CoPhaAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ImageUploadController : ControllerBase
//    {
//        [HttpPost("upload")]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        [Authorize] // pour le token
//        public async Task<IActionResult> UploadImage([FromForm] IFormFile image)
//        {
//            if (image == null || image.Length == 0)
//            {
//                return BadRequest("No file uploaded or the file is empty.");
//            }

//            // Create a folder to store images if not exists
//            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "Images");
//            if (!Directory.Exists(folderPath))
//            {
//                Directory.CreateDirectory(folderPath);
//            }

//            // Save the file to a directory on the server
//            var filePath = Path.Combine(folderPath, image.FileName);
//            using (var stream = new FileStream(filePath, FileMode.Create))
//            {
//                await image.CopyToAsync(stream);
//            }

//            return Ok(new { FilePath = filePath, Message = "Image uploaded successfully" });
//        }
//    }
//}
