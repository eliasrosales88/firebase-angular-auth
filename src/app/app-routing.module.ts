import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'register', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'logout', component:LogoutComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
