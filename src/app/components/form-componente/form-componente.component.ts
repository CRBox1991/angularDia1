import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';



@Component({
  selector: 'app-form-componente',
  templateUrl: './form-componente.component.html',
  styleUrls: ['./form-componente.component.css']
})
export class FormComponenteComponent {
  
  public registerForm: FormGroup

    constructor(private formBuilder: FormBuilder, public apiService: UserService, private toastr: ToastrService){  

      this.buildForm();

  } 

  public register(){
    const user = this.registerForm.value;
    let nuevoUser: User = new User(user.name, user.last_name, user.email, null, user. password)
    this.apiService.postRegister(nuevoUser).subscribe((resp: number) =>
      {
        console.log(resp);
    
         if (resp == -1){
          this.toastr.error('Registro erroneo');
        } else {
          this.apiService.userLogeado.id_user = resp
          this.toastr.success('Te has registrado correctamente')
        }      
      }) 
      console.log(nuevoUser);
  }

  private buildForm(){
    const minPassLength = 8;
    this.registerForm = this.formBuilder.group({
    name: [, Validators.required],
    last_name: [, Validators.required],
    email: [, [Validators.required, Validators.email]],
    password:[,[Validators.required, Validators.minLength(minPassLength)]],
    password2:[,[Validators.required, this.checkPasswords]]
    })

  }

  private checkPasswords(control: AbstractControl){

    let resultado = {matchPassword: true};
    if(control.parent?.value.password == control.value)
      resultado= null;

    return resultado;
  }

}
