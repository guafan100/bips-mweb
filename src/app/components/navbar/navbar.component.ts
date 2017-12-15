import { Component, Input, OnChanges } from '@angular/core';
import * as fromAuthReducer from 'app/core/reducers/auth.reducer';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnChanges {
  @Input() auth: fromAuthReducer.State;

  constructor(){

  }

  ngOnChanges(){

  }
}
