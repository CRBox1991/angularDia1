import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private myBooks: Book [] 

  constructor() {   

    this.myBooks = [  new Book("Caperucita Roja", "Tapa dura", "Charles Perrault", 13.99, "../../../assets/img/caperucita.jpeg",1),
                      new Book("Los Tres Cerditos", "Tapa blanda", "Joseph Jacobs", 11.99, "../../../assets/img/cerditos.jpeg",2),
                      new Book("La cenicienta", "Tapa dura", "Giambattista Basile", 9.99, "../../../assets/img/cenicienta.jpeg",3),
                    ]
     
  }

public getAll(): Book []{
 
  return this.myBooks

  }

public getOne(Id_libro: number): Book{

  for( let i = 0; i < this.myBooks.length; i++){
    if(this.myBooks[i].id_book == Id_libro){
      return this.myBooks[i]
    }  
   }
  }

public deleteBook(id_book: number):boolean{
  this.myBooks.splice(id_book,1)
  return true
}

}

