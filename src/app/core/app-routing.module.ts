import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesModule } from 'app/containers/notes/notes.module';
import { HomeModule } from 'app/containers/home/home.module';
import { LoginModule } from 'app/containers/auth/login/login.module';
import { SignupModule } from 'app/containers/auth/signup/signup.module';
import { NotesComponent } from 'app/containers/notes/notes.component';
import { HomeComponent } from 'app/containers/home/home.component';
import { LoginComponent } from 'app/containers/auth/login/login.component';
import { SignupComponent } from 'app/containers/auth/signup/signup.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: HomeComponent }
];

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
