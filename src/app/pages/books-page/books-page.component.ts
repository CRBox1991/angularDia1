import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
public libro: Book;
public libros: Book[];

      constructor(public booksService:BooksService, private toastr: ToastrService, public apiService: BooksService){   
      //this.libros = this.booksService.getAll()    
      this.apiService.getAll().subscribe((resp: Respuesta)=>{
      this.libros = resp.data
      })
  }

 
  public getLibro(id: string){
    console.log(id);
       if(id == ""){
        this.apiService.getAll().subscribe((resp: Respuesta) =>{
          this.libros = resp.data
        })
       } else {
    this.apiService.getOne(parseInt(id)).subscribe((resp: Respuesta) =>
    {
      console.log(resp);
      
      if (resp.error){
        this.toastr.error('no hay libros');
      } else {
        this.apiService.myBooks = resp.data
        this.libros = resp.data}
    })
  }
    
  }

  
  public deleteBook(id_book: number){
    
    this.apiService.deleteBook(id_book).subscribe((resp: Respuesta) =>
    {
      console.log(resp);
      console.log(id_book);     
      
      if (resp.error)
        {
        this.toastr.error('no hay libros');
        }
      else {
        // this.apiService.myBooks = resp.data
        // console.log(resp.data);  
        this.apiService.getAll().subscribe((resp: Respuesta)=>
        {
          this.libros = resp.data
        })
        this.toastr.success('tu libro fue borrado con exito')        
        //this.libros = resp.data
      }  
    })

  } 
}



