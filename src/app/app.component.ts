import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;
  isFullScreen : Boolean =  false;

  constructor(private router : Router) { 
    this.ActivateFeatures();
  }
    doLogout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigateByUrl('login');
  }

  ActivateFeatures() {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    console.log("features Toggled");
  }

  ToggleFullScreen() {
    let elem = document.documentElement;
    if(this.isFullScreen == true) {
      if (document.exitFullscreen) 
        document.exitFullscreen();
        this.isFullScreen = false;
    } else {
      if (elem.requestFullscreen) 
        elem.requestFullscreen(); 
        this.isFullScreen = true;
    }
  }
    
}
