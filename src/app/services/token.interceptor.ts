import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({providedIn:'root'})
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('tokenSales')!=null){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.AccessToken}`
        }
      });
    }else{

    }
    return next.handle(request);
  }
}