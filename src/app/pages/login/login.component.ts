import { Input, Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() userName: string;

  login(){
    sessionStorage.setItem('usuario', this.userName)
  }
}
