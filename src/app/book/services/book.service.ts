import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private books: Book[] = [
    {
      id: 1,
      name: 'Noli Me Tangere',
      authors: ['Jose P. Rizal'],
      isbn: '9715691870'
    },
    {
      id: 2,
      name: 'Banaag at Sikat',
      authors: ['Lope K. Santos'],
      isbn: '9789814914055'
    },
    {
      id: 3,
      name: 'Mga Ibong Mandaragit',
      authors: ['Amado V. Hernandez'],
      isbn: '9718970088'
    }
  ]
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(newBook: Book): void {
    this.books.push(newBook);
  }

  getBookById(id: number): Observable<Book | undefined> {
    return of(this.books.find(book => book.id === id));
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    } else {
      console.error(`Book with ID ${updatedBook.id} not found.`);
    }
  }
}
