import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthCredentials } from './auth/auth.credentials';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private credentials: AuthCredentials, private authService: AuthService, private route: Router){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: this.credentials.myFirebaseApiKey,
      authDomain: this.credentials.myFirebaseAuthDomain
    })
  }

  onLogout(){
    this.authService.logout();
    this.route.navigate(['/']);
  }
}
