import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
  
  constructor(private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(localStorage.getItem('token')) {
      return true;
    } 
    
    this.router.navigateByUrl('login');
    return false;
  }
}