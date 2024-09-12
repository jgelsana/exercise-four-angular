import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
serverUrl = 'http://localhost:3000'

constructor(private http: HttpClient) { }

getBooks = (): Observable<Book[]> => {
  return this.http.get<Book[]>(`${this.serverUrl}/books`)
}

getBookById(id: string): Observable<Object> {
  return this.http.get(`${this.serverUrl}/books/${id}`)
}

addBook(book: Book) {
  return this.http.post(`${this.serverUrl}/books`, book).pipe(
    tap(x => {
      console.log('Adding book:', x);
    })
  );
}

updateBook(bookId: string, updatedBook: Book) {
  return this.http.put(`${this.serverUrl}/books/${bookId}`, updatedBook).pipe(
    tap(x => {
      console.log('Updating', x);
    })
  );
}

deleteBook(id:string) {
  return this.http.delete(`${this.serverUrl}/books/${id}`).pipe(
    tap(x => {
      console.log('Deleting', x);
    })
  );
}

deleteAllBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.serverUrl}/books`).pipe(
    tap(books => {
      books.forEach(book => {
        this.http.delete<void>(`${this.serverUrl}/books/${book.id}`).subscribe(
          () => {},
          error => console.error(`Error deleting book with ID ${book.id}:`, error)
        );
      }
    );
    })
  );
}

}
