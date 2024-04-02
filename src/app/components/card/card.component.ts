import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  
  @Input() bucleBooks: Book;
  @Input() even: boolean;
  @Output() borrarLibro = new EventEmitter<Book>();
  
  //@Output() editaLibro = new EventEmitter<Book> ()
  
  public libro: Book;
  
  constructor(public booksService:BooksService){
        
  }

  public deleteBook(book: Book ) {
    this.borrarLibro.emit(book)
    console.log(book);
     
 }
}
