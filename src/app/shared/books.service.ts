import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public book: Book
public myBooks: Book [] 
private url = "http://localhost:3000/books"
  constructor(private http: HttpClient,) {   
          
     
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
     
  return this.http.put(this.url, newBook)      
  }  

public deleteBook(id_book: number){ 
  let deletedBook = {headers: null, body:{id_book:id_book}};
  return this.http.delete(this.url,deletedBook);

  //return this.http.delete(this.url) 
  } 
   
}



