import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public book: Book;
  public myBooks: Book [];
  constructor(public booksService : BooksService, private toastr: ToastrService, public apiService: UserService){ 
    
  }


  public addBook(title: string, type: string, author: string,price: number,photo: string, user_id:number){
 
    //let  nuevoLibro = new Book(title, type, autor, precio, photo, id)
    this.booksService.addBook( title, type, author, price, photo, this.apiService.userLogeado[0].user_id).subscribe((resp: []) =>
      {
        console.log(resp);
    
        if (resp == null){
          this.toastr.error('Ya existe el libro');
        } else {
          this.booksService.myBooks = resp
          this.toastr.success('Tu libro se añadio correctamente')
          this.myBooks = resp}      
      }) 
  }

}
