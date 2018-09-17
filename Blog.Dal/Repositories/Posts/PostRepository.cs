﻿using Blog.Dal.Models;
using Blog.Dal.Models.Base;
using Blog.Dal.Repositories.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Dal.Repositories.Posts
{
    public class PostRepository : GenericRepository<Post, BloggingContext>, IPostRepository
    {
        public PostRepository(BloggingContext context) : base(context)
        {
            
        }

        public IEnumerable<Post> FindByWithComments(Expression<Func<Post, bool>> predicate)
        {
            return _table.Where(predicate).Include(s => s.Comments);
        }

        public Task<IEnumerable<PagedEntity<Post>>> GetAllPostPaged(Expression<Func<Post, bool>> predicate = null)
        {
            throw new NotImplementedException();
        }
    }
}
