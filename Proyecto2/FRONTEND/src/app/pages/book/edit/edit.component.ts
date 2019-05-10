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
  issn="asdfasd";
  categories:any;
  category:any;

  constructor(private formBuilder: FormBuilder) {
    this.type = this.formBuilder.group({
      issn: [null, Validators.required],
      name: [null, Validators.required],
      category: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],

      });
    this.issn= JSON.parse(localStorage.getItem('Book'));

     this.categories =[
        {
          Id:1,
          Name:"Accion"
        },{
          Id:2,
          Name:"Terror"
        },{
          Id:3,
          Name:"Novela Policiaca"
        }
      ]

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

  upBook(){
    console.log(this.type.value.category);
    console.log(this.type.value.name);
    console.log(this.type.value.description);
    console.log(this.type.value.price);
    console.log(this.type.value.amount);
  }
}