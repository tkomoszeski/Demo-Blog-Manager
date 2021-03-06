using System.Threading.Tasks;
using Blog.Bll.Dto.Images;
using Microsoft.AspNetCore.Http;

namespace Blog.Bll.Services.Images.ImageWriter {
    
    public interface IImageWriter{
        
        Task<string> UploadImage(IFormFile file);
        string GetImageExtension(IFormFile file);
        bool DeleteImageFileFromServer(string imageName);
    }
}

