import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public miUser: User

  constructor(public apiService: UserService, public toastr: ToastrService){
    
    this.miUser = this.apiService.userLogeado[0]
    
  }

public enviar(name:string, last_name:string,email:string, photo:string){
  console.log("modificando usuario");
  console.log(name); 
  

  this.apiService.putUsuario(name, last_name,email, photo, this.apiService.userLogeado[0].user_id).subscribe((resp: Respuesta) =>
  {
    if(resp.error){
      this.toastr.error(resp.mensaje)
    } else{
      this.toastr.success(resp.mensaje)
      if (name != ""){
        this.apiService.userLogeado[0].name = name;
      }
      if (last_name != ""){
        this.apiService.userLogeado[0].last_name = last_name;
      }
      if (email != ""){
        this.apiService.userLogeado[0].email = email;
      }
      if (photo != ""){
        this.apiService.userLogeado[0].photo = photo;
      }
    }
  })
  }
  
}
