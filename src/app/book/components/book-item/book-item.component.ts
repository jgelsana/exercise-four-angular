import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() actionEmitter = new EventEmitter<Object>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  books: Observable<Book[]> | undefined;

  constructor(
    private router: Router
  ) {
    this.book = {} as Book;
  }

  onDeleteClick(id: string) {
    this.delete.emit(id);
  }

  onEditClick(id: string) {
    this.edit.emit(id);
    this.router.navigate(['book/form', id]);
  }
}
