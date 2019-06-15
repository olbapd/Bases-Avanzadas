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
    console.log("Hello");
    let username = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(username,password)
      .subscribe((result)=>{
        if(result.error){
          console.log(result.message);
        }
        if(result.status){
          let user = result.data[0];
          localStorage.setItem('user',JSON.stringify(user));
          if(user.tipoUsuario==0){ //gerente
            this.router.navigate(['/pages/admin/main']);  
          }
          else if(user.tipoUsuario==1){ //admin tienda
            this.router.navigate(['/pages/book/main']);  
          }
          else if(user.tipoUsuario==2){ //cliente
            this.router.navigate(['/pages/book/main']);  
          }
          else if(user.tipoUsuario==3){ //agente
            this.router.navigate(['/pages/order/main']);  
          }
        }
    });
  }
}

