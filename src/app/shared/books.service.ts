import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

public user: User;
public book: Book
public myBooks: Book [] 
private url: string= "http://localhost:3000/books"
  
constructor(private http: HttpClient, private apiService: UserService) {             
     
  }

public getAll(id_user: number){    
  console.log("pasa por aqui");  
  console.log(id_user);    
  return this.http.get(`${this.url}?user_id=${id_user}`)
  }

public getOne(user_id:number, book_id: number){
  console.log("consiguiendo libro");   
 console.log(book_id);  
 return this.http.get(`${this.url}?user_id=${user_id}&book_id=${book_id}`) 
  
  }

public addBook(title: string, type: string, author: string, price: number, photo: string, user_id: number){
  let nuevoLibro = {user_id, title, type, author, price, photo}
     console.log("nuevo libro en marcha");
     
  return this.http.post(this.url, nuevoLibro)
  }

  public editBook(book_id: number,  title: string, type: string, author: string, price: number, photo: string, user_id: number){
    let editBook = {book_id, user_id, title, type, author, price, photo}
    console.log("hola capullo 2");
    console.log(book_id);
    
  return this.http.put(this.url, editBook)      
  }  

public deleteBook(id_book: number){ 
  console.log("borrando libro book service", id_book);  
  let deletedBook = {headers: null, body:{book_id:id_book, }};
  return this.http.delete(`${this.url}`, deletedBook, );
  } 
   
}



