import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  public miUser:User

  constructor(){
    this.miUser = new User (1357, "Juan", "Redondo Caja", "dharianfenix@gmail.com", "../../../assets/img/IMG_0251.jpg", "1234")
    }
    public enviar(nuevoNombre:HTMLInputElement){
      console.log(this.miUser.name);
      this.miUser.name = nuevoNombre.value;      
    }
  }

  
    

