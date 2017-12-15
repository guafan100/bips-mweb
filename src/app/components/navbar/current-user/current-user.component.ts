import { Component, Input, OnChanges } from '@angular/core';
import { User } from 'app/core/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'current-user',
  templateUrl: 'current-user.component.html',
  styleUrls: ['current-user.component.scss']
})

export class CurrentUserComponent implements OnChanges {
  @Input() user: User;

  constructor() {

  }

  ngOnChanges() {

  }


}
