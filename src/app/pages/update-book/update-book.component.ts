import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public selectType: string;
  public book: Book
  public myBooks: Book []
  constructor(public user: UserService, private toastr: ToastrService, public apiService: BooksService){
  } 

public editBook(title: string, type: string, author: string, price: number, photo: string, id_book: number){
  //let  libroEditado = new Book(title, type, author, price, photo, id_book)  
  this.apiService.editBook(id_book, title, type, author, price, photo, this.user.userLogeado[0].user_id).subscribe((resp: []) =>
  {
    console.log(this.user.userLogeado[0].user_id);
    console.log("hola capullo");
    
    console.log(resp);
    if (resp == null){      
      this.toastr.error('no existe el libro');
    } else {
      this.apiService.myBooks = resp
      console.log(resp);      
      this.toastr.success('Tu libro se edito correctamente')
    }        
         
  })

  }
}
