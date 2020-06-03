import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;
    let token = localStorage.getItem('token');
    
    if(token) {
      authReq = req.clone({
        headers : new HttpHeaders({
          "token":token
        })
      })
    } else {
      authReq = req.clone({ 
        headers : new HttpHeaders({
          
        })
      });
    }
    
    return next.handle(authReq);
  }
}