import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {


public libro: Book;
public libros: Book[];

      constructor(public booksService:BooksService, private toastr: ToastrService, public miApi: UserService ){  
        console.log("pasa por aqui");
        
        console.log(this.miApi.userLogeado);
        console.log(this.miApi.userLogeado[0].user_id);
        
        this.booksService.getAll(this.miApi.userLogeado[0].user_id).subscribe((resp: []) =>{
        this.libros = resp
        console.log(resp);
          
    })
  }

  public getLibro(id: string){
    console.log(id); 
      
      if(id != ""){                
          this.booksService.getOne(this.miApi.userLogeado[0].user_id, parseInt(id)).subscribe((resp: []) =>
            {                       
            this.libros = resp   
            this.toastr.success("este es tu libro")              
            console.log(resp);
            console.log("te lo consigo");
            })                                   
          
            } else {
          this.booksService.getAll(this.miApi.userLogeado[0].user_id).subscribe((resp: []) =>{
          this.libros = resp
          console.log(resp);        
        })
      } 
  }
    
  public deleteBook(id_book: number){
    console.log("books page componente", id_book);
      if (id_book == null)
        {
        this.toastr.error('no hay libros');
        }
      else {
          this.booksService.deleteBook(id_book).subscribe((resp: [])=>
        {
            this.booksService.getAll(this.miApi.userLogeado[0].user_id).subscribe((resp: [])=>
          {
            this.libros = resp
            this.toastr.success('tu libro fue borrado con exito')
          })                 
        })      
      }  
  } 
}



