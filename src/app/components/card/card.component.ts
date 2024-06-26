import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  @Output() borrarLibro = new EventEmitter<number>();
  
  //@Output() editaLibro = new EventEmitter<Book> ()
  
  public libro: Book;
  
  constructor(public booksService:BooksService, private toastr: ToastrService){
        
  }

  public deleteBook(book_id: number ) {
    this.borrarLibro.emit(book_id)
    console.log(book_id);     
    console.log("borrando libro card componete");
    
 }
}
