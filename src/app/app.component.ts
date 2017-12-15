import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState, User } from 'app/core/models';
import { Observable } from 'rxjs/Observable';
import * as fromAuthReducer from 'app/core/reducers/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  auth: fromAuthReducer.State;
  constructor(private store: Store<StoreState>) {
    store.select('auth').subscribe(
      (state: fromAuthReducer.State) => {
        this.auth = state;
      }
    )
  }
}
