﻿using System.Threading.Tasks;
using Blog.Bll.Dto.Posts;
using Blog.Bll.Dto.QueryModels;
using Blog.Bll.Services.Posts;
using Blog.Bll.Services.Users;
using Blog.Web.Controllers.Base;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/post")]
    public class PostController : BaseBlogAppController
    {
        private readonly IPostService _postService;
        
        public PostController(IPostService postService, 
        IUserService userService,
        IAuthorizationService authorizationService) : base (userService,authorizationService)
        {
            _postService = postService;
        }

        [HttpGet("paged")]
        public async Task<IActionResult> GetAllPostsPaged([FromQuery] PostQuery query){
            var result = await _postService.GetAllPostsPagedAsyncWithAuthor(query);
            return Ok(result);
        }

        [HttpGet("blog/paged")]
        public async Task<IActionResult> GetAllPostsPagedByBlogId([FromQuery] PostQuery query){
            var result = await _postService.GetAllPostPagedAsyncByBlogId(query);
            return Ok(result);
        }

        [HttpGet("{id:int}/author")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPostWithAuthor(int id)
        {
            var result = await _postService.GetPostWithAuthorById(id);
            return Ok(result);
        }

        
        // POST: api/Post
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PostDto value)
        {
            var result = await _postService.AddPostAsync(value);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) {
            var result = await _postService.GetPostById(id);
            return Ok(result);
        }

    
        
        // PUT: api/Post/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] PostDto value)
        {
            var result = await _postService.EditPostAsync(value);
            return Ok(result);
        }


        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _postService.DeletePostAsync(id);
            return Ok(result);
        }
    }
}
