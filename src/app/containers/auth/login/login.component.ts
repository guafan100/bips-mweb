import { Component } from '@angular/core';
import { User } from 'app/core/models/user';
import { Store } from '@ngrx/store';
import { StoreState } from 'app/core/models/store-state';
import { AuthService } from 'app/core/services/auth.service';
import * as AuthActions from 'app/core/actions/auth.action';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  user = new User();

  constructor(
    private authService: AuthService,
    private store: Store<StoreState>
  ){}

  onSubmit(){
    this.authService.login({
      "email": this.user.email,
      "password": this.user.password
    }).subscribe(
      data => {
        localStorage.setItem('orcasmart_access_token', data.token);
        this.store.dispatch(new AuthActions.LoginSuccess());
      },
      err => {
        console.log('error');
        console.log(err);
      }
    )
  }

}
