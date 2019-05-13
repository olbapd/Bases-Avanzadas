import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{
  type: FormGroup;
  errorMessage: string = '';
  
  constructor(
  	  private router: Router,
      private fb: FormBuilder,
      private authService : AuthService
      ){

    this.type = this.fb.group({
      idcard: [null, Validators.required],
      name: [null, Validators.required],
      birthdate: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      user: [null, Validators.required],
      password: [null, Validators.required],
      });

  }



  addNewUser(){
    
    /*let bDate = this.type.value.date.getFullYear()+ "-" +
                    (this.type.value.date.getMonth() + 1) + "-" +
                    this.type.value.date.getDate() */
                

    let body={
       cedula:this.type.value.idcard,
       nombre:this.type.value.name,
       apellido1:this.type.value.name,
       apellido2:this.type.value.name,
       fechaNacimiento:this.type.value.birthdate,
       tipoUsuario:2,
       lugar:this.type.value.address,
       correo:this.type.value.email,
       telPrincipal:this.type.value.phone,
       telSecundario:this.type.value.phone,
       usuario:this.type.value.user,
       contrasena:this.type.value.password
      }

      console.log(body)

       this.authService.register(body)
      .subscribe((result)=>{
         if(result.status){
           Swal(
             'Created Succesfully!',
             '',
             'success'
           )
         }
      console.log(result.message)

      })



      }
 }