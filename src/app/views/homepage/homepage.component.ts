import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  signupForm: FormGroup
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null),
      'password': new FormControl(null),
      'email': new FormControl(null),
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
