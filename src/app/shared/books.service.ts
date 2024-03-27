import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public book: Book
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

public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
  this.myBooks.push(new Book(title, type, autor, precio, photo, id))
  console.log(this.myBooks);  
  }

  public editBook(title: string, type: string, author: string, price: number, photo: string, id: number){
     
    for(let i = 0; i < this.myBooks.length; i++){
      if(this.myBooks[i].id_book === id){
        this.myBooks[i].author=author,
        this.myBooks[i].title=title,
        this.myBooks[i].type=type,
        this.myBooks[i].price=price;
        this.myBooks[i].photo=photo;
      }        
    }
    console.log(this.myBooks);
  }
  
  
  

public deleteBook(id_book: number){ 
  for(let i = 0; this.myBooks.length; i++){
    if(this.myBooks[i].id_book == id_book){
      this.myBooks.splice(i,1)}
    }  
  }
    
}



