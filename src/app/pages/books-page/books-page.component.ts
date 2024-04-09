import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
public libro: Book;
public libros: Book[];

      constructor(public booksService:BooksService, private toastr: ToastrService, public apiService: BooksService){   
        // this.libros = this.booksService.getAll()    
      this.apiService.getAll().subscribe((resp: Respuesta)=>{
        this.libros = resp.data
      })
  }

 
  public getLibro(id: number){   
    this.apiService.getOne(id).subscribe((resp: Respuesta) =>
    {
      console.log(resp);
      if (resp.error)
        this.toastr.success('no hay libros');
      else
        this.apiService.myBooks = resp.data
        this.libros = resp.data
    })
    
  }

  // public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
  //  this.myBooks.push(new Book(title, type, autor, precio, photo, id))     
  // }

  public deleteBook(book: Book) {
    // console.log(book);   
    // this.booksService.deleteBook(book.id_book);
    // this.toastr.success("Tu libro fue borrado");
    // this.libros = this.booksService.getAll()
    this.apiService.deleteBook(book.id_book).subscribe((resp: Respuesta) =>
    {
      console.log(resp);
      if (resp.error)
        this.toastr.error('no hay libros');
      else
        this.apiService.myBooks = resp.data
        this.toastr.success('tu libro fue borrado con exito')
        this.libros = resp.data      
    })

    } 
 }



