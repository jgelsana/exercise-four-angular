import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.fetchBooks();
  }

  fetchBooks() {
    this.books$ = this.bookService.getBooks();
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe();
    this.fetchBooks();
  }

  deleteAllBooks() {
    this.bookService.deleteAllBooks().subscribe(() => {this.fetchBooks()});
  }
}
