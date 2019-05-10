import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';

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
  user = "Juan"

  constructor(private formBuilder: FormBuilder) {
    this.type = this.formBuilder.group({
      idCard: [null, Validators.required],
      name: [null, Validators.required],
      phone: [null, Validators.required],
      birthdate: [null, Validators.required],
      address: [null, Validators.required],
      type: [null, Validators.required],
      email: [null, Validators.required],
      user: [null, Validators.required],
      pass: [null, Validators.required],

      });
    this.user= JSON.parse(localStorage.getItem('Client'));
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
    console.log(this.type.value.name);
    console.log(this.type.value.birthdate);
    console.log(this.type.value.address);
    console.log(this.type.value.phone);
    console.log(this.type.value.email);
    console.log(this.type.value.user);
    console.log(this.type.value.pass);
    
  }
}