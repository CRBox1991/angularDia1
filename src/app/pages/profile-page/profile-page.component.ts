import { ThisReceiver } from '@angular/compiler';
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
    this.miUser = new User()
      this.miUser.name = "Cristian"
      this.miUser.last_name = "Redondo Caja"
      this.miUser.email = "dharianfenix@gmail.com"
      this.miUser.photo = "../../assets/img/IMG_0251.jpg"
  }

public enviar(nuevoNombre:HTMLInputElement, nuevoApellido:HTMLInputElement,nuevoEmail:HTMLInputElement, nuevaFoto:HTMLInputElement){
  console.log(this.miUser.name);
  this.miUser.name = nuevoNombre.value; 
  this.miUser.last_name =  nuevoApellido.value ;
  this.miUser.email = nuevoEmail.value;  
  this.miUser.photo = nuevaFoto.value
  }
}
