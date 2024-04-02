import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public book: Book
private myBooks: Book [] 

  constructor() {   
  let myBook1: Book = new Book("Caperucita Roja", "Tapa dura", "Charles Perrault", 13.99, "../../../assets/img/caperucita.jpeg",1);
  let myBook2: Book = new Book("Los Tres Cerditos", "Tapa blanda", "Joseph Jacobs", 11.99, "../../../assets/img/cerditos.jpeg",2);
  let myBook3: Book = new Book("La cenicienta", "Tapa dura", "Giambattista Basile", 9.99, "../../../assets/img/cenicienta.jpeg",3);
   
  this.myBooks = [ myBook1, myBook2, myBook3]          
                   
     
  }

public getAll(): Book []{
 
  return this.myBooks

  }

public getOne(Id_libro: number): Book{
  let result: Book = null
  for( let i = 0; i < this.myBooks.length; i++){

    if(this.myBooks[i].id_book == Id_libro){    
    console.log(this.myBooks[i]);
    result = this.myBooks[i]
      }  
    }
  return result 
  }
      


public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
  this.myBooks.push(new Book(title, type, autor, precio, photo, id))
  console.log(this.myBooks);    
  }

  public editBook(title: string, type: string, author: string, price: number, photo: string, id: number): boolean{
  
  let result: boolean = false     
  for(let i = 0; i < this.myBooks.length; i++){
      if(this.myBooks[i].id_book == id){
      this.myBooks[i].author=author,
      this.myBooks[i].title=title,
      this.myBooks[i].type=type,
      this.myBooks[i].price=price;
      this.myBooks[i].photo=photo;  
      result = true        
      } 
    }    
  return result      
  }
  
  
  

public deleteBook(id_book: number){ 
  let result = false
  for(let i = 0; i < this.myBooks.length; i++){
    if(this.myBooks[i].id_book == id_book){
    this.myBooks.splice(i,1)
    result = true  
      }      
    }  
  return result  
  } 
   
}



