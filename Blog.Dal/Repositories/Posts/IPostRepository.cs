﻿using Blog.Dal.Models;
using Blog.Dal.Models.Base;
using Blog.Dal.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Dal.Repositories.Posts
{
    public interface IPostRepository : IGenericRepository<Post> 
    {
        IEnumerable<Post> FindByWithComments(Expression<Func<Post, bool>> predicate); 
        Task<IEnumerable<PagedEntity<Post>>>  GetAllPostPaged(Expression<Func<Post,bool>> predicate = null);
    }
}
