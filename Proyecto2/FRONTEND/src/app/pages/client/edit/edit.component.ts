import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'edit',
  styleUrls: ['./edit.component.scss'],
  templateUrl: './edit.component.html',
})


export class EditComponent {
  type : FormGroup;
  validTextType: boolean = false;
  validNumberType: boolean = false;
  idCard="asdfasd";
  user :any;

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService) {
    this.type = this.formBuilder.group({
      phone: [null, Validators.required],
      phone2: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, Validators.required],
      pass: [null, Validators.required],

      });
    this.user= JSON.parse(localStorage.getItem('user'));
    this.idCard=this.user._id;
    console.log(this.user);
  }
  validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
  textValidationType(e){
    if (e) {
      this.validTextType = true;
    }
    else{
      this.validTextType = false;
    }
  }
  numberValidationType(e){
    if (e) {
      this.validNumberType = true;
    }else{
      this.validNumberType = false;
    }
  }

  upInfo(){
    let body={
       lugar:this.type.value.address,
       correo:this.type.value.email,
       contrasena:this.type.value.pass,
       telPrincipal:this.type.value.phone,
       telSecundario:this.type.value.phone2
    }
    this.clientService.editClient(body,this.idCard)
      .subscribe((result)=>{
        if(result.status){
          Swal(
            'Modified Succesfully!',
            '',
            'success'
          )
        }
      })

  }
}