import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { SignupComponent } from './signup.component';

import { AuthService } from 'app/core/services/auth.service';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    SignupComponent
  ]
})

export class SignupModule {}
