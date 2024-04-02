import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public book: Book
  public myBooks: Book []
  constructor(public BooksService: BooksService){

  } 

public editBook(title: string, type: string, author: string, price: number, photo: string, id: number){
  
  if(this.BooksService.editBook(title, type, author, price, photo, id)){
  alert("El libro fue modificado correctametne")
    } else {alert("No existe el Id")}
  }

}
