import { Component, Input, OnChanges } from '@angular/core';
import { User } from 'app/core/models';
import * as fromAuthReduer from 'app/core/reducers/auth.reducer';

@Component({
  selector: 'current-user',
  templateUrl: 'current-user.component.html',
  styleUrls: ['current-user.component.scss']
})

export class CurrentUserComponent implements OnChanges {
  @Input() auth: fromAuthReduer.State;

  constructor() {

  }

  ngOnChanges() {

  }


}
