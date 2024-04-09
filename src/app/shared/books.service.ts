import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public book: Book
public myBooks: Book [] 
private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) {   
  // let myBook1: Book = new Book("Caperucita Roja", "Tapa dura", "Charles Perrault", 13.99, "../../../assets/img/caperucita.jpeg",1);
  // let myBook2: Book = new Book("Los Tres Cerditos", "Tapa blanda", "Joseph Jacobs", 11.99, "../../../assets/img/cerditos.jpeg",2);
  // let myBook3: Book = new Book("La cenicienta", "Tapa dura", "Giambattista Basile", 9.99, "../../../assets/img/cenicienta.jpeg",3);
   
  // this.myBooks = [ myBook1, myBook2, myBook3]                  
     
  }

public getAll(){
 
  return this.http.get(this.url)

  }

public getOne(id_libro: number){
   
  console.log(id_libro);
  
 return this.http.get(`${this.url}?id_book=${id_libro}`) 
  
  }

public addBook(newBook: Book){
  // this.myBooks.push(new Book(title, type, autor, precio, photo, id))
  // console.log(this.myBooks);    
  return this.http.post(this.url, newBook)
  }

  public editBook(newBook: Book){
  
  // let result: boolean = false     
  // for(let i = 0; i < this.myBooks.length; i++){
  //     if(this.myBooks[i].id_book == id){
  //     this.myBooks[i].author=author,
  //     this.myBooks[i].title=title,
  //     this.myBooks[i].type=type,
  //     this.myBooks[i].price=price;
  //     this.myBooks[i].photo=photo;  
  //     result = true        
  //     } 
  //   }    
  return this.http.put(this.url, newBook)      
  }  

public deleteBook(id_book: number){ 
  // let result = false
  // for(let i = 0; i < this.myBooks.length; i++){
  //   if(this.myBooks[i].id_book == id_book){
  //   this.myBooks.splice(i,1)
  //   result = true  
  //     }      
  //   }  
  return this.http.delete(`${this.url}?id_book=${id_book}`) 
  } 
   
}



