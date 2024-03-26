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
  }

  public deleteBook(book: Book) {
    let index = this.myBooks.indexOf(book);   
      this.myBooks.splice(index, 1);    
  }

}

