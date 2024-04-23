import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User;  

  constructor(public bookService: BooksService, public apiService: UserService, private toastr: ToastrService, private router: Router){
    this.user = new User(null, null, '', null, '')
  } 

  onSubmit(form:NgForm){
    console.log(this.user);
    console.log(form.value);
    
    this.apiService.postLogin(this.user).subscribe((resp: User ) =>
      {        
        console.log(resp);
    
         if (resp == null ){          
          this.toastr.error('login erroneo');
        } else {
          this.apiService.userLogeado = resp
          this.toastr.success('login correcto')
          this.apiService.logueado = true;
          this.router.navigate(['/books'])                          
        }      
      }) 
      
  }

}


