import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'agregar',
  styleUrls: ['./agregar.component.scss'],
  templateUrl: './agregar.component.html',
})


export class AgregarComponent {
  type : FormGroup;
  validTextType: boolean = false;
  validNumberType: boolean = false;


  constructor(private formBuilder: FormBuilder) {
    this.type = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      percent: [null, Validators.required],
      begin: [null, Validators.required],
      description: [null, Validators.required],
      end: [null, Validators.required],
      
      });
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
  addNewPromo(){
    console.log(this.type.value.code);
    console.log(this.type.value.name);
    console.log(this.type.value.percent);
    console.log(this.type.value.description);
    console.log(this.type.value.begin);
    console.log(this.type.value.end);

  }


}