import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { CurrentUserComponent } from 'app/components/navbar/current-user/current-user.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    CurrentUserComponent
  ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule {}
