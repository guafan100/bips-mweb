import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesModule } from '../containers/notes/notes.module';
import { HomeModule } from '../containers/home/home.module';
import { LoginModule } from '../containers/auth/login/login.module';
import { SignupModule } from '../containers/auth/signup/signup.module';
import { NotesComponent } from '../containers/notes/notes.component';
import { HomeComponent } from '../containers/home/home.component';
import { LoginComponent } from '../containers/auth/login/login.component';
import { SignupComponent } from '../containers/auth/signup/signup.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    NotesModule,
    HomeModule,
    LoginModule,
    SignupModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
