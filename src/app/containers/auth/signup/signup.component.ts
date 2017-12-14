import { Component } from '@angular/core';
import { User } from 'app/core/models/user';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})

export class SignupComponent {
  user = new User();

  constructor(
    private authService: AuthService
  ){}

  onSubmit(){
    this.authService.signup({
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
