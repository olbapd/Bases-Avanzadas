import { Component, OnInit, Input, Output } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import  {CodeErrorComponent} from '../dialogs/code_error/code_error.component';
import { Options } from 'selenium-webdriver/edge';
import { all } from 'q';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isPopupOpened = false;
  constructor(public restApi: RestApiService,private router: Router,private dialog: MatDialog,private formBuilder: FormBuilder) {
   }
  ngOnInit() {
    this.CategoriaDropdown();
    this.AccionDropDown();
    this.MonedasDropdown();
    /* this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  }); */
    //this.activos = this.restApi.getActivos(); 
  }
 /*  get f() { return this.registerForm.controls; }
 */

 /*  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
} */
  EstadoDropdown(){
    let option;
    let dropdown2 = document.getElementById('estado3-Dropdown');
     this.restApi.getEstados().subscribe((res)=>{
       const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
     for (var _i = 3; _i < count; _i++) {
      option = document.createElement('option');
      option.text = json.data[_i].Nombre;
      option.value = json.data[_i].IdEstado;
      dropdown2.append(option);
   }   
  });;
  }
  MonedasDropdown(){
    let option;
    let dropdown = document.getElementById('moneda-Dropdown');
    this.restApi.getMonedas().subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option= document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdMoneda;
        dropdown.append(option);
     }   
  });;
  }
  CategoriaDropdown(){
    let option;
    let dropdown = document.getElementById('categoria-Dropdown');
    let dropdown2 = document.getElementById('categoria2-Dropdown');
    let dropdown3 = document.getElementById('categoria3-Dropdown');
    this.restApi.getCategorias().subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown.append(option);
     } 
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown2.append(option);
    }   
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdCategoria;
        dropdown3.append(option);
    }  
  });;
  }
  registrar_activo(nombre,descripcion,fecha_compra,precio_compre,
    valor_residual,detalle_ubicacion,codigo,categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado)
    {
    let btn = document.getElementById('registrar_btn');
    this.restApi.getActivoXCodigo().subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      if (json.data[0]==null){
        btn.setAttribute('class','btn bnt-danger');
        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(CodeErrorComponent);
      }

      else{
        this.restApi.setActivo(nombre,descripcion,fecha_compra,precio_compre,valor_residual,detalle_ubicacion,codigo,
          categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado);  
      }
  });;
  }
  CodigoDropDown_Modif_State(idCategoria){
    $("#codigo_modif_state-Dropdown").empty(); //jquery clear dropdown
    let dropdown = document.getElementById('codigo_modif_state-Dropdown');
    let defaulOption;
    defaulOption= document.createElement('option');
    defaulOption.text = "--Codigo--";
    defaulOption.value = 0;
    dropdown.append(defaulOption);
    this.restApi.getCodigoXCategoria(idCategoria).subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      let option;
      for (var _i = 0; _i < count; _i++) {
        let option;
        option= document.createElement('option');
        option.text = json.data[_i].Codigo;
        dropdown.append(option);
     } 
  });;
  }
  EstadoDropDown_Modif_State(Codigo){
    $("#estado3-Dropdown").empty(); //jquery clear dropdown
    let option;
    let dropdown = document.getElementById('estado3-Dropdown');
    this.restApi.getEstadoXCodigo(Codigo).subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option= document.createElement('option');
        option.text = "--Actual:--" + json.data[_i].Nombre;
        option.value = json.data[_i].idEstado;
        dropdown.append(option);
     } 
  });;
  this.EstadoDropdown();
  }
  modificar_estado_activo(Codigo,IdEstado){
    let btn = document.getElementById('modifstate_btn');
    if (Codigo=="" || IdEstado==""){
      btn.setAttribute('class','btn btn-danger');
     }
     else{
      this.restApi.getQuitarActivo(Codigo,IdEstado).subscribe((res)=>{
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        
         if(json.success==true){
           btn.setAttribute('class','btn btn-success');
  
         }
      });;
     }
  }
  asignar_activo(Codigo,Cedula,DetalleUbi){
    //this.restApi.setAssignActivo(Codigo,Cedula,DetalleUbi);
    console.log("Si:"+localStorage.getItem('IdEmpleado'));
    
  
    
    
  }
  AccionDropDown(){
    $("#accion-Dropdown").empty(); //jquery clear dropdown
    $("#codigo2-Dropdown").empty(); //jquery clear dropdown
    let dropdown1 = document.getElementById('codigo2-Dropdown');
    let defaulOption1;
    defaulOption1= document.createElement('option');
    defaulOption1.text = "--Codigo--";
    defaulOption1.value = 0;
    dropdown1.append(defaulOption1);
    let defaulOption;
    defaulOption= document.createElement('option');
    defaulOption.text = "--Acción--";
    defaulOption.value = 0;
    let option1;
    let option2;
    let dropdown = document.getElementById('accion-Dropdown');
    dropdown.append(defaulOption);
    option1= document.createElement('option');
    option2= document.createElement('option');
    option1.text = "Asignar";
    option1.value = 4;
    dropdown.append(option1);
    option2.text = "Re-Asignar";
    option2.value = 3;
    dropdown.append(option2);
  }
  CodigoDropDown_Asig(idAccion,idCategoria){
    $("#codigo2-Dropdown").empty(); //jquery clear dropdown
    let dropdown = document.getElementById('codigo2-Dropdown');
    let defaulOption;
    defaulOption= document.createElement('option');
    defaulOption.text = "--Codigo--";
    defaulOption.value = 0;
    dropdown.append(defaulOption);
    this.restApi.getCodigoDynamic(idAccion,idCategoria).subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        let option;
        option= document.createElement('option');
        option
        option.text = json.data[_i].Codigo;
        dropdown.append(option);
     } 
  });;
  }
}
