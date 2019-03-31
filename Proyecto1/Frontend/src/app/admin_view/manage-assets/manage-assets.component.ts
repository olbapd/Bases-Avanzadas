import { Component, OnInit } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import  {CodeErrorComponent} from '../dialogs/code_error/code_error.component';
import { Options } from 'selenium-webdriver/edge';
import { all } from 'q';


@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  isPopupOpened = false;
  constructor(public restApi: RestApiService,private router: Router,private dialog: MatDialog) {
   }
  ngOnInit() {
    this.CategoriaDropdown();
    this.AccionDropDown();
    //this.activos = this.restApi.getActivos(); 
  }
  EstadoDropdown(){
    let option;
    let dropdown2 = document.getElementById('estado3-Dropdown');
     this.restApi.getEstados().subscribe((res)=>{
       const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
     for (var _i = 2; _i < count; _i++) {
      option = document.createElement('option');
      option.text = json.data[_i].Nombre;
      option.value = json.data[_i].IdEstado;
      dropdown2.append(option);
   }   
  });;
  }
  SedeDropdown(){
    let option;
    let dropdown = document.getElementById('sede-Dropdown');
    this.restApi.getSedes().subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option= document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdSede;
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
    valor_residual,sede,detalle_ubicacion,codigo,categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado)
    {
    this.restApi.getActivoXCodigo().subscribe((res)=>{
      const myObjStr = JSON.stringify(res)
      const json = JSON.parse(myObjStr);
      if (json.data[0]==null){
        console.log("Codigo de Activo en existencia")
        this.isPopupOpened = true;
               const dialogRef = this.dialog.open(CodeErrorComponent);
      }
      else{
        this.restApi.setActivo(nombre,descripcion,fecha_compra,precio_compre,valor_residual,sede,detalle_ubicacion,codigo,
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
  modificar_estado_activo(activo,estado_activo){
    $("#estado3-Dropdown").load;
    //console.log(activo);
  }
  asignar_activo(Codigo,Cedula,DetalleUbi){
    this.restApi.setAssignActivo(Codigo,Cedula,DetalleUbi);
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
