import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  pwd_show : 'text' | 'password' = 'password';
  message = "";
  isError : Boolean = false;
  errors = [];
  constructor(private auth : AuthService,
    private router : Router) { }

  ngOnInit() { }

  togglePwdShow() {
    if(this.pwd_show == 'text') this.pwd_show = 'password'; else this.pwd_show = 'text';
  }

  doLogin(user) {
    this.auth.login(user.email,user.password).toPromise().then(data => {
        if(data['body']['success'] == false) {
          if(data['body']['error']) {
            this.message = ""
            this.isError = true;
            this.errors = [];
            this.errors = data['body']['error']['errors'];
          } else { this.isError = false }
          if(data['body']['message']) {
            this.message =  "";
            this.message = data['body']['message'];
          }
        } else {
          this.message = data['body']['message'];
          localStorage.setItem('token',data['body']['token']);
          this.isError = false;
          this.router.navigateByUrl('profile');
        }
    }).catch(err => {
        alert("something wrong in login");
    });
  }

}
