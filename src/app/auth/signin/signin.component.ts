import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;
  signinForm:FormGroup;
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signinForm);
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;

    this.authService.signinUser(email, password);
    console.log(name, email, password);
  }  
}
