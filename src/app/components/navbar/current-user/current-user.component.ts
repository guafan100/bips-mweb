import { Component, Input } from '@angular/core';
import { User } from 'app/core/models';

@Component({
  selector: 'current-user',
  templateUrl: 'current-user.component.html',
  styleUrls: ['current-user.component.scss']
})

export class CurrentUserComponent {
  @Input() user: User;
  constructor() {
    
  }
}
