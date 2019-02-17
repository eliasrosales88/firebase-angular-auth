import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  signupForm: FormGroup
  hide = true;
  // email: FormControl;

  constructor() { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  onSubmit(){
    console.log(this.signupForm);
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    console.log(name, email, password);
    this.signupForm.reset();
  }
}
