import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path : "login", component : LoginComponent },
  { path : "register", component : RegisterComponent },
  { path : "profile", component : ProfileComponent,canActivate:[AuthGuardService]},
  { path : "**", redirectTo : "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
