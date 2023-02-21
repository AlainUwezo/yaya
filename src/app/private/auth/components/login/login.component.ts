import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePassword: Boolean = true;
  formGroup!:FormGroup;
  invalidEmailOrPassword:Boolean = false;

  constructor(
    private auth:AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    })
  }

  getEmailControl(){
    return this.formGroup.controls['email'];
  }

  getPasswordControl(){
    return this.formGroup.controls['password'];
  }

  login(){
    const email = this.getEmailControl().value;
    const password = this.getPasswordControl().value;

    if(email == '' || password == ''){
      return;
    }

    const x = this.auth.login(email, password);
  }
}
