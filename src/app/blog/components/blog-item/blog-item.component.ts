import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input() blog: Blog;
  @Output() actionEmitter = new EventEmitter<Blog>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.blog = {} as Blog;
  }

   editBlog(id: number): void {
    this.router.navigate(['blog/form', id])
    this.actionEmitter.emit(this.blog);
  };

  deleteBlog(id: number): void {
    console.log(`Deleting blog: ${id}`);
    this.actionEmitter.emit(this.blog);
  };
}
