import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public book: Book;
  public myBooks: Book [];
  constructor(public booksService : BooksService, private toastr: ToastrService){ 
    
  }


  public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
    this.booksService.addBook(title, type, autor, precio, photo, id);
    this.toastr.success("El libro se agrego correctamente")   
  }

}
