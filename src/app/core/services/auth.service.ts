import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from 'app/core/models/user';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}

  public getOrcaToken(): string {
    return localStorage.getItem('orcasmart_access_token');
  }

  public setOrcaToken(token): void {
    localStorage.setItem('orcasmart_access_token', token);
  }

  public login(credential): Observable<any> {
    return this.http.post(environment.ORCA_API + 'login', credential);
  }

  public signup(credential): Observable<any> {
    return this.http.post(environment.ORCA_API + 'signup', credential);
  }

  public getCurrentUser(): Observable<any> {
    return this.http.get(environment.ORCA_API + 'me');
  }

}
