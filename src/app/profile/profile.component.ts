import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { User } from '../model/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  
  pwd_show : 'text' | 'password' = 'password';
  load : Boolean = false;
  message = "";
  errors = [];
  user : User;

  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.getProfile();
  }

  togglePwdShow() {
    if(this.pwd_show == 'text') this.pwd_show = 'password'; else this.pwd_show = 'text';
  }

  getProfile() {
    this.profileService.getProfile().toPromise().then(data => {
      if(data['body']['success']) {
        this.user = data['body'];
        this.load = true;
      } else {
        this.load = false;
        alert("login required");
      }
    }).catch(err => {
      this.load = false;
      alert("something wrong in profile");
    });
  }

  updateProfile(user) {
    this.profileService.updateProfile(user.name,user.password).toPromise()
    .then(data => {
      if(data.status == 200) {
        if(data['body']['success'] == true) {
          this.message = data['body']['message'];
          this.errors = [];
        } else {
          this.message = data['body']['message'];
          this.errors = data['body']['error']['errors'];
        }
      }
    })
    .catch(err => {
      alert("something wrong in profile updation");
    });
  }
}