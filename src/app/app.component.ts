import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState, User } from 'app/core/models';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core/services/auth.service';
import * as fromAuthReducer from 'app/core/reducers/auth.reducer';
import * as AuthActions from 'app/core/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  auth: fromAuthReducer.State;

  constructor(
    private store: Store<StoreState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.store.select('auth').subscribe(
      (state: fromAuthReducer.State) => {
        this.auth = state;
      }
    );

    if(this.authService.getOrcaToken()){
      this.authService.getCurrentUser().subscribe(
        data => {
          this.store.dispatch(new AuthActions.SetCurrentUser(data.user));
        },
        err => {
          console.log('error');
          console.log(err);
        }
      )
    }


  }

}
