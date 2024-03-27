import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {

      constructor(public BooksService:BooksService){   
    
  }

  


  
  //public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
   // this.myBooks.push(new Book(title, type, autor, precio, photo, id))     
  //}

  // public deleteBook(book: Book) {
    //let index = this.myBooks.indexOf(book);   
     // this.myBooks.splice(index, 1);    
 // }

}

