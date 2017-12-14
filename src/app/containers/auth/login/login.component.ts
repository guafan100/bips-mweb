import { Component } from '@angular/core';
import { User } from 'app/core/models/user';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  user = new User();
  constructor(
    private authService: AuthService
  ){}
  onSubmit(){

    this.authService.login({
      "email": this.user.email,
      "password": this.user.password
    }).subscribe(
      data => {
        localStorage.setItem('orcasmart_access_token', data.token);
      },
      err => {
        console.log('error');
        console.log(err);
      }
    )
  }

}
