import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  
  BASE_URL = "http://localhost:8080/api/mail";
  constructor(private http : HttpClient) { }

  getInbox() {
    return this.http.get(this.BASE_URL+"/inbox",{observe:'response'});
  }

  send(to,subject,body) {
    return this.http.post(this.BASE_URL+"/send",{to,subject,body},{observe:'response'});
  }
}
