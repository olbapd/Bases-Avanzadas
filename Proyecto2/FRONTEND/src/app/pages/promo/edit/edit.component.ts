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
  code="asdfasd";

  constructor(private formBuilder: FormBuilder) {
    this.type = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      percent: [null, Validators.required],
      begin: [null, Validators.required],
      description: [null, Validators.required],
      end: [null, Validators.required],
      
      });
    this.code= JSON.parse(localStorage.getItem('Promo'))
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
}