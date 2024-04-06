import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() actionEmitter = new EventEmitter<Book>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.book = {} as Book;
  }

  editBook(id: number): void {
    this.router.navigate(['book/form', id]);
    this.actionEmitter.emit(this.book);
  };

  deleteBook(id: number): void {
    console.log(`Deleting book: ${id}`);
    this.actionEmitter.emit(this.book);
  };

}
