import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



public userLogeado: User
public logueado: boolean = false;
private urlRegister: string = "http://localhost:3000/register";
private urlLogin: string = "http://localhost:3000/login";
private urlUsuarios: String = "http://localhost:3000"

constructor(private http: HttpClient,) {             
     
}

public postRegister(user:User){

  return this.http.post(this.urlRegister, user)

}

public postLogin(user:User){
  return this.http.post(this.urlLogin, user)  
}

public putUsuario(name:string, last_name:string,email:string, photo:string, user_id:number){
  console.log("userService");

  
  let editUser = {name, last_name, email, photo, user_id}
  console.log(editUser);
  
  let url= this.urlUsuarios + "/Usuarios";
  return this.http.put(url, editUser)
}

}
