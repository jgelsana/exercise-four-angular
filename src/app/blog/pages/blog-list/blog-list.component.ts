import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  executeAction = (blog: Blog, index: number) => {
    console.log('Blog: ', blog, index)
  }

  handleAction(action: string, activeRoute: string): string {
    console.log('Action received:', action);
    return activeRoute;
  }
}
