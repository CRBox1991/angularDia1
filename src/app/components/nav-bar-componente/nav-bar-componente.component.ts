import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-nav-bar-componente',
  templateUrl: './nav-bar-componente.component.html',
  styleUrls: ['./nav-bar-componente.component.css']
})
export class NavBarComponenteComponent {

  constructor(public userService: UserService){}

}
