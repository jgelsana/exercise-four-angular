import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input() blog: Blog;
  // @Output() actionEmitter = new EventEmitter<Object>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  blogs: Observable<Blog[]> | undefined;

  constructor(
    private router: Router,
  ) {
    this.blog = {} as Blog;
  }

  onDeleteClick(id: string) {
    this.delete.emit(id);
  }

  onEditClick(id: string) {
    this.edit.emit(id);
    this.router.navigate(['blog/form', id]);
  }


}
