import { Component, OnInit, Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/login.service'; 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  
  constructor(
  	  private router: Router,
      private fb: FormBuilder,
      private authService : AuthService){

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  
  ngOnInit() {
  }

  login(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email,password)
      .subscribe((result)=>{
        console.log(result);
      }); 
  }
}

