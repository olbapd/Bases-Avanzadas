import { Component, OnInit, Input, Output } from '@angular/core';
import {RestApiService} from 'src/app/services/client_service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import  {CodeErrorComponent} from '../dialogs/code_error/code_error.component';
import { Options } from 'selenium-webdriver/edge';
import { all } from 'q';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { FotoService } from '../../services/foto.service';



@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  photo: any;
  form: FormGroup;
  submitted = false;
  isPopupOpened = false;
  constructor(public restApi: RestApiService,private router: Router,private dialog: MatDialog,private formBuilder: FormBuilder,private fotoService: FotoService) {
    
   }
  ngOnInit() {
    this.form = new FormGroup({
      Nombre: new FormControl('', Validators.required),
      Descripcion: new FormControl('', Validators.required),
      FechaCompra: new FormControl('', Validators.required),
      PrecioCompra: new FormControl('', Validators.required),
      ValorResidual: new FormControl('', Validators.required),
      Codigo: new FormControl('', Validators.required),
      Categoria: new FormControl('', Validators.required),
      Depreciacion: new FormControl('', Validators.required),
      TiempoGarantia: new FormControl('', Validators.required),
      VidaUtil: new FormControl('', Validators.required),
      CentroCosto: new FormControl('', Validators.required),
      Moneda: new FormControl('', Validators.required)
 

   });
    this.CategoriaDropdown();
    this.AccionDropDown();
    this.MonedasDropdown();
  }
  get f() { return this.form.controls; }
  onPhotoChange(event){
    this.photo = event.target.files[0];

    //this.pictures[idNumber-1].name = photoName;
}
  onSubmit() {
    this.submitted = true;
    let nombre = this.form.get('Nombre').value;
    let descripcion = this.form.get('Descripcion').value;
    let fecha_compra = this.form.get('FechaCompra').value;
    let precio_compre = this.form.get('PrecioCompra').value;
    let valor_residual = this.form.get('ValorResidual').value;
    let codigo = this.form.get('Codigo').value;
    let depreciacion = this.form.get('Depreciacion').value;
    let categoria = this.form.get('Categoria').value;
    let tiempo_garantia = this.form.get('TiempoGarantia').value;
    let vida_util = this.form.get('VidaUtil').value;
    let centro_costo = this.form.get('CentroCosto').value;
    let moneda = this.form.get('Moneda').value;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else{
      let btn = document.getElementById('registrar_btn');
       //Se debe almacenar la imagen primero
       this.fotoService.uploadFile(this.photo)
       .subscribe((data)=>{
           let photoHash = (data && data.hash)? data.hash : null;
           console.log(photoHash);
           this.restApi.getActivoXCodigo(codigo).subscribe((res)=>{
            const myObjStr = JSON.stringify(res)
            const json = JSON.parse(myObjStr);
            if (json.data[0]==null){
              this.restApi.setActivo(codigo,nombre,descripcion,photoHash,precio_compre,tiempo_garantia,vida_util,depreciacion,fecha_compra,centro_costo,valor_residual,categoria,moneda).subscribe((res)=>{});; 
              
            }
      
            else{
              //btn.setAttribute('class','btn bnt-danger');
              this.isPopupOpened = true;
              const dialogRef = this.dialog.open(CodeErrorComponent);
              
            }
    });;
           //POner el resto de su codigo aqui adentro
           //Cuando se va usar el sp de agregar cliente, en el espacio de 
           //Foto utilizar la cariable photoHas.


           //
       });

      

    }
}
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
  CodigoDropDown_Modif_State(idCategoria){
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class','btn btn-primary');
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
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class','btn btn-primary');
    $("#estado3-Dropdown").empty(); //jquery clear dropdown
    let option;
    let dropdown = document.getElementById('estado3-Dropdown');
    this.restApi.getEstadoXCodigo(Codigo).subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option= document.createElement('option');
        option.text = "--Actual--:" + json.data[_i].Nombre;
        option.value = json.data[_i].idEstado;
        dropdown.append(option);
     } 
  });;
  this.EstadoDropdown();
  }
  estadoXCodigo(){
    let btn = document.getElementById('modifstate_btn');
    btn.setAttribute('class','btn btn-primary');
  }

  UpdateEstado(Codigo){
    $("#estado3-Dropdown").empty(); //jquery clear dropdown
    let option;
    let dropdown = document.getElementById('estado3-Dropdown');
    this.restApi.getEstadoXCodigo(Codigo).subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option= document.createElement('option');
        option.text = "--Actual--:" + json.data[_i].Nombre;
        option.value = json.data[_i].idEstado;
        dropdown.append(option);
     } 
  });;
  this.EstadoDropdown();
  }

  modificar_estado_activo(Codigo,IdEstado){
    console.log("IdEstado"+IdEstado);
    let btn = document.getElementById('modifstate_btn');
    if (Codigo=="" || IdEstado==""){
      btn.setAttribute('class','btn btn-danger');
      window.alert("No ha sido posible modificar estado del Activo Código:"+" "+Codigo+"\n" +"Error: Estado:"+" "+IdEstado+"\n"+"Revise los datos");
     }
     else{
      this.restApi.getQuitarActivo(Codigo,IdEstado).subscribe((res)=>{
        const myObjStr = JSON.stringify(res)
        const json = JSON.parse(myObjStr);
        
         if(json.success==true){
           btn.setAttribute('class','btn btn-success');
           this.UpdateEstado(Codigo);
           window.alert("Estado del Activo Código:"+" "+Codigo+" "+"modificado de froma exitosa");
         }
      });;
     }
  }
  //-----------ASIGNAR ACTIVO------------------
  asignar_activo(Codigo,Cedula,DetalleUbi){
    this.restApi.setAssignActivo(Codigo,Cedula,DetalleUbi).subscribe((res)=>{});
    console.log("Si:"+Codigo+" "+Cedula+" "+DetalleUbi);
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
