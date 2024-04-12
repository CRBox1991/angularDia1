import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public book: Book;
  public myBooks: Book [];
  constructor(public booksService : BooksService, private toastr: ToastrService, public apiService: BooksService){ 
    
  }


  public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
 
    let  nuevoLibro = new Book(title, type, autor, precio, photo, id)
    this.apiService.addBook(nuevoLibro).subscribe((resp: Respuesta) =>
      {
        console.log(resp);
    
        if (resp.error){
          this.toastr.error('Ya existe el libro');
        } else {
          this.apiService.myBooks = resp.data
          this.toastr.success('Tu libro se añadio correctamente')
          this.myBooks = resp.data}      
      }) 
  }

}
