import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pwd_show : 'text' | 'password' = 'password';
  constructor() { }

  ngOnInit() { }

  togglePwdShow() {
    if(this.pwd_show == 'text') this.pwd_show = 'password'; else this.pwd_show = 'text';
  }

}
