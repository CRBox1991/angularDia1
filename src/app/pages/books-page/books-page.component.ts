import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
    public myBooks: Book [];
  constructor(){
    this.myBooks =[
      new Book("Caperucita Roja", "Tapa dura", "Charles Perrault", 13.99, "../../../assets/img/caperucita.jpeg",1),
      new Book("Los Tres Cerditos", "Tapa blanda", "Joseph Jacobs", 11.99, "../../../assets/img/cerditos.jpeg",2),  
      new Book("La cenicienta", "Tapa dura", "Giambattista Basile", 9.99, "../../../assets/img/cenicienta.jpeg",3),
    ]
  }

  public addBook(title: string, type: string, autor: string,precio: number,photo: string, id:number){
    this.myBooks.push(new Book(title, type, autor, precio, photo, id))
   
    //this.myBook.id_book = id.value;
    //this.myBook.id_user;
    //this.myBook.title = title.value; 
    //this.myBook.type = type.value;
    //this.myBook.author = autor.value;
    //this.myBook.price = precio.value;
    //this.myBook.photo = photo.value;

   
  }
  
}
