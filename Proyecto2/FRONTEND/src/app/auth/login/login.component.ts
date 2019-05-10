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
    /*this.authService.login(email,password)
      .subscribe((result)=>{
        console.log(result);
      }); */
    this.authService.Testlogin(email,password);
    let userType=1;
    let user= {
      email:email,
      userType: userType
    }
    
    localStorage.setItem('user',JSON.stringify(user));
    if(userType==1){
      this.router.navigate(['/pages/admin/main']);  
    }
    else if(userType==2){
      this.router.navigate(['/pages/book/main']);  
    }
    else if(userType==3){
      this.router.navigate(['/pages/order/agregar']);  
    }
    else if(userType==4){
      this.router.navigate(['/pages/book/main']);  
    }
  }
}

