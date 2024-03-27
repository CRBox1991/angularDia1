import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public book: Book;
  constructor(public BooksService : BooksService){ 
    
  }



  //public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
    //this.myBooks.push(new Book(title, type, autor, precio, photo, id))     
 //}

}
