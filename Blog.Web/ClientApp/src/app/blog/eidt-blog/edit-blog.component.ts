import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../models/blog.model';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-blog',
    templateUrl: './edit-blog.component.html',
    styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

    public model: BlogModel;

    private id: number;

    constructor(private blogService: BlogService,private route:ActivatedRoute) {
        this.model = new BlogModel(0, '');
        this.id = 0;
     }

    public ngOnInit(): void {
        this.getIdFromRoute();
        this.getBlog();
    }

    public onSubmit(model: BlogModel): void {
        this.updateBlog(model);
    }

    private getIdFromRoute(): void {
        this.id = this.route.snapshot.params['id'];
    }

    private getBlog(): void {
        this.blogService.getBlogById(this.id).subscribe(response => {
            this.model = response;
        })
    }

    private updateBlog(model: BlogModel) : void {
        this.blogService.updateBlog(model).subscribe(response => {
            this.model = response;
            console.log("response:" + this.model);
        })
    }
}