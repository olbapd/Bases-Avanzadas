import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { CatalogService } from '../../../services/catalog.service';
import { BookService } from '../../../services/book.service';
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
  issn="asdfasd";
  categories:any;
  categorySelect:any;
  bookstoreCode:any;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private catalogService: CatalogService,) {
    this.type = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      sold: [null, Validators.required]

      });

    /*let temp={
      amount: 16,
      category: "Programacion",
      description: "Aprender programando",
      issn: "java0001",
      name: "Java para principiantes",
      photo: "../../../../assets/book.png",
      price: 12500,
      sales: 0
    }*/
    let temp= JSON.parse(localStorage.getItem('Book'));
    this.bookstoreCode = JSON.parse(localStorage.getItem('StoreCode'));
    this.type.get('name').setValue(temp.name);
    this.type.get('price').setValue(temp.price);
    this.type.get('description').setValue(temp.description);
    this.type.get('amount').setValue(temp.amount);
    this.type.get('sold').setValue(temp.sales);
    this.issn = temp.issn;

    this.catalogService.getCategories()
      .subscribe((result)=>{
        if(result.status){
          this.categories=result.data;
          this.categorySelect = temp.categoryId;
        }
      })
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
    let body={
      libreria_id:this.bookstoreCode,
      descripcion:this.type.value.description,
      foto: "",
      precio:this.type.value.price,
      cantidadVendida:this.type.value.sold,
      cantidadDisponible:this.type.value.amount,
      estado:"bueno"
    }
    this.bookService.editBook(body,this.issn)
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