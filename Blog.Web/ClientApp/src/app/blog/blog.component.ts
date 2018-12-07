import { Component, OnInit } from '@angular/core';
import { BlogModel } from './models/blog.model';
import { BlogService } from './blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  implements OnInit {
  public blog: BlogModel;
  private blogId: number;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute ) {
    this.blogId = activatedRoute.snapshot.params['blogId'];
  }

  public ngOnInit(): void {
    this.blogService.getBlogById(this.blogId).subscribe(response => {
      this.blog = response;
    });
  }

}


