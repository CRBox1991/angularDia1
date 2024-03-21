import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public miUser: User

  constructor(){
    this.miUser = new User(1357, "Cristian", "Redondo Caja", "dharianfenix@gmail.com", "../../../assets/img/IMG_0251.jpg", "1234")
  }

public enviar(nuevoNombre:HTMLInputElement, nuevoApellido:HTMLInputElement,nuevoEmail:HTMLInputElement, nuevaFoto:HTMLInputElement){
  console.log(this.miUser.name);
  this.miUser.name = nuevoNombre.value; 
  this.miUser.last_name =  nuevoApellido.value ;
  this.miUser.email = nuevoEmail.value;  
  this.miUser.photo = nuevaFoto.value
  }
}
