import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  pwd_show : 'text' | 'password' = 'password';
  message = "";
  isError : Boolean = false;
  errors = [];

  constructor(private auth : AuthService) { }

  togglePwdShow() {
    if(this.pwd_show == 'text') this.pwd_show = 'password'; else this.pwd_show = 'text';
  }

  doRegister(user) {
      this.auth.register(user.name, user.email, user.password).toPromise()
      .then(data => {
        console.log(data);
        if(data['body']['success'] == false) {
          if(data['body']['error']) {
            this.message = ""
            this.isError = true;
            this.errors = [];
            this.errors = data['body']['error']['errors'];
            console.log(this.errors);
          } else { this.isError = false }
          if(data['body']['message']) {
            this.message =  "";
            this.message = data['body']['message'];
          }
        } else {
          this.message = data['body']['message'];
          localStorage.setItem('token',data['body']['token']);
          this.isError = false;
        }
      }).catch(err => {
        alert("Something wrong");
      });
  }

  ngOnInit() {}
  
}
