import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { PromoService } from '../../../services/promo.service';
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
  code:any;
  bookstoreCode:any;
  
  constructor(private formBuilder: FormBuilder,
              private promoService:PromoService) {

    this.type = this.formBuilder.group({
      books: [null, Validators.required],
      percent: [null, Validators.required],
      begin: [null, Validators.required],
      description: [null, Validators.required],
      end: [null, Validators.required],
      
      });
    this.bookstoreCode = JSON.parse(localStorage.getItem('StoreCode'));
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
  upPromo(){
    let percentage = parseInt(this.type.value.percent)/100;
    let books = this.type.value.books.split(";");

     let startDate = this.type.value.begin.getFullYear()+ "-" +
                    (this.type.value.begin.getMonth() + 1) + "-" +
                    this.type.value.begin.getDate() 
    let endDate = this.type.value.end.getFullYear()+ "-" +
                    (this.type.value.end.getMonth() + 1) + "-" +
                    this.type.value.end.getDate() 
    
    let body={
      nombre:this.code,
      descripcion:this.type.value.description,
      fechaInicio:startDate,
      fechaFin:endDate,
      porcenDescuento:percentage,
      libro: books,
      libreria: this.bookstoreCode,
    }
    this.promoService.editPromo(body,this.code)
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