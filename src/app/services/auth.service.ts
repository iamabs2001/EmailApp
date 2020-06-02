import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = "http://localhost:8080/api";

  constructor(private http : HttpClient) {}

  login(email, password) {
      return this.http.post(this.BASE_URL+"/auth/login",{email,password},{observe:'response'});
  }
}
