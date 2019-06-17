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
    private authService: AuthService) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    console.log("Hello");
    let username = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(username, password)
      .subscribe((result) => {
        console.log(result);
        if (result.error) {
          console.log(result.message);
        }
        if (result.status) {
          let user = result.data[0];
          console.log(user.typeUser)
          localStorage.setItem('user', JSON.stringify(user));
          if (user.typeUser == 0) { //gerente
            this.router.navigate(['/pages/admin']);
          }
          else if (user.typeUser == 2) { //admin
            this.router.navigate(['/pages/admin']);
          }
        }
      });
  }
}

