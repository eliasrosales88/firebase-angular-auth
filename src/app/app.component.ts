import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthCredentials } from './auth/auth.credentials';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private credentials: AuthCredentials){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: this.credentials.myFirebaseApiKey,
      authDomain: this.credentials.myFirebaseAuthDomain
    })
  }
}
