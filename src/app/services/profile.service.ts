import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  BASE_URL = "http://localhost:8080/api/user";

  constructor(private http : HttpClient) { }

  getProfile() {
    return this.http.get<User>(this.BASE_URL+"/profile",{observe:'response'});
  }

  updateProfile(name,password) {
    return this.http.put(this.BASE_URL+"/profile",{name,password},{observe:'response'});
  }
}
