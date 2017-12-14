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

  login(credential): Observable<any> {
    return this.http.post(environment.ORCA_API_ENDPOINT + 'login', credential);
  }
}
