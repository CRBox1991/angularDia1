import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
public libro: Book;
public libros: Book[];

      constructor(public booksService:BooksService){   
        this.libros = this.booksService.getAll()
    
  }
  public getLibro(id: number){ 
    if(id){ 
      this.libro = this.booksService.getOne(id)
      if(this.libro == null){
        alert("No existe el libro")
      }
    } else {this.libro = null;
      this.libros = this.booksService.getAll()}    
    console.log(this.libro);    
  }

  // public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
  //  this.myBooks.push(new Book(title, type, autor, precio, photo, id))     
  // }

  public deleteBook(book: Book) {
    console.log(book);   
    this.booksService.deleteBook(book.id_book);
    alert("Tu libro fue borrado");
    this.libros = this.booksService.getAll()
    } 
 }



