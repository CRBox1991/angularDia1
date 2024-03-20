import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent {

  public miUser:User

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
