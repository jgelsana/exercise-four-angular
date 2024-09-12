import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { Observable, map, mergeMap, of, tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
serverUrl = 'http://localhost:3000'

constructor(private http: HttpClient) { }

getBlogs = (): Observable<Blog[]> => {
  return this.http.get<Blog[]>(`${this.serverUrl}/blogs`)
}

getBlogById(id: string): Observable<Object> {
  return this.http.get(`${this.serverUrl}/blogs/${id}`)
}

addBlog(blog: Blog): Observable<any> {
  return this.http.post(`${this.serverUrl}/blogs`, blog).pipe(
    tap(response => {
      console.log('Adding blog:', response);
    })
  );
}

updateBlog(blogId: string, updatedBlog: Blog) {
  return this.http.put(`${this.serverUrl}/blogs/${blogId}`, updatedBlog).pipe(
    tap(x => {
      console.log('Updating', x);
    })
  );
}

deleteBlog(id:string) {
  return this.http.delete(`${this.serverUrl}/blogs/${id}`).pipe(
    tap(x => {
      console.log('Deleting', x);
    })
  );
}

deleteAllBlogs(): Observable<Blog[]> {
  return this.http.get<Blog[]>(`${this.serverUrl}/blogs`).pipe(
    tap(blogs => {
      blogs.forEach(blog => {
        this.http.delete<void>(`${this.serverUrl}/blogs/${blog.id}`).subscribe(
          () => {},
          error => console.error(`Error deleting blog with ID ${blog.id}:`, error)
        );
      }
    );
    })
  );

}

}
