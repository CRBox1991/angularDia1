import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public book: Book
  public myBooks: Book []
  constructor(public BooksService: BooksService, private toastr: ToastrService, public apiService: BooksService){
  } 

public editBook(title: string, type: string, author: string, price: number, photo: string, id_book: number){
  let  libroEditado = new Book(title, type, author, price, photo, id_book)  
  this.apiService.editBook(libroEditado).subscribe((resp: Respuesta) =>
  {
    console.log(resp);
    if (resp.error){
      this.toastr.error('no existe el libro');
    } else {
      this.apiService.myBooks = resp.data
      console.log(resp.data);
      
      this.toastr.success('Tu libro se edito correctamente')
      this.myBooks = resp.data
      console.log(this.myBooks);
    }        
         
  })

  }
}
