import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
    blogs$: Observable<Blog[]> | undefined;


    constructor(private blogService: BlogService) { }

    ngOnInit(): void {
      this.fetchBlogs();
    }
  
    fetchBlogs() {
      this.blogs$ = this.blogService.getBlogs();
    }

    deleteBlog(id: string) {
      this.blogService.deleteBlog(id).subscribe();
      this.fetchBlogs();
    }

    deleteAllBlogs() {
      this.blogService.deleteAllBlogs().subscribe(() => {this.fetchBlogs()});
    }
}
