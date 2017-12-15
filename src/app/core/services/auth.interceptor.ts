import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from 'app/core/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private inj: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.inj.get(AuthService);
    const authReq = req.clone({
    headers: req.headers.set(
      'Authorization', `Bearer ${authService.getOrcaToken()}`
    )
  });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
