import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;
  authorFormArray: FormArray;
  isEditMode: boolean = false;
  bookData: any;
  bookId: string = '';

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {
    this.book = {} as Book;
    this.bookForm = {} as FormGroup;
    this.authorFormArray = {} as FormArray;
  }

  books: Observable<Object> = this.bookService.getBooks();

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.bookId = params['id'];
      if (id) {
        this.isEditMode = true;
        this.bookService.getBookById(id).subscribe((book: any) => {
          if (book) {
            this.book = book;
            this.populateForm(book);
          } else {
            console.log('Book does not exist')
          }
        });
      }
    });
  }

  private initForm(): void {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([
        new FormControl('')
      ]),
      isbn: ['']
    })

    this.authorFormArray = this.bookForm.controls['authors'] as FormArray
  }

  private populateForm(book: Book): void {
    this.bookForm.patchValue({
      name: book.name,
      isbn: book.isbn
    });
    book.authors.forEach(author => {
      this.authorFormArray.push(this.fb.control(author));
    });
  }

  // get authors(): FormArray {
  //   return this.bookForm.get('authors') as FormArray;
  // }

  addAuthor() {
    this.authorFormArray.push(new FormControl(''));
  };

  deleteAuthor(index:number) {
    this.authorFormArray.removeAt(index);
  }

  submit(newBook: Book): void {
    if(this.isEditMode) {
      this.bookService.updateBook(this.bookId, newBook).subscribe(() => {this.resetForm()})
    } else {
      this.bookService.addBook(newBook).subscribe(() => {this.resetForm()});
    }
  }

  resetForm(): void {
    this.bookForm.reset();
  }
}
