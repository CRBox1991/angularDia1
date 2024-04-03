import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-componente',
  templateUrl: './form-componente.component.html',
  styleUrls: ['./form-componente.component.css']
})
export class FormComponenteComponent {

  public registerForm: FormGroup

    constructor(private formBuilder: FormBuilder){  

      this.buildForm();

  } 

  public register(){
    const user = this.registerForm.value;
    console.log(user);
    
  }

  private buildForm(){
    const minPassLength = 8;
    this.registerForm = this.formBuilder.group({
    firstName: [, Validators.required],
    lastName: [, Validators.required],
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
