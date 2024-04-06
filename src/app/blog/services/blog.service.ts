import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'My First Blog',
      author: 'Juan Dela Cruz',
      comments: ['Wow', 'Nope.', 'Nice.']
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'My Second Blog',
      author: 'Juan Dela Cruz',
      comments: ['Nope.']
    },
    
  ]

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  addBlog(newBlog: Blog): void {
    this.blogs.push(newBlog);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return of(this.blogs.find(blog => blog.id === id));
  }

  updateBlog(updatedBlog: Blog): void {
    const index = this.blogs.findIndex(blog => blog.id === updatedBlog.id);
    if (index !== -1) {
      this.blogs[index] = updatedBlog;
    } else {
      console.error(`Blog with ID ${updatedBlog.id} not found.`);
    }
  }
}
