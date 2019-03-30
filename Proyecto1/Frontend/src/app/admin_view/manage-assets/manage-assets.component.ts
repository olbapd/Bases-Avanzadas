import { Component, OnInit } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import  {CodeErrorComponent} from '../dialogs/code_error/code_error.component';


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
    this.EstadoDropdown();
    this.CategoriaDropdown();
    this.SedeDropdown();
    //this.activos = this.restApi.getActivos(); 
  }

  EstadoDropdown(){
    let option;
    let dropdown = document.getElementById('estado1-Dropdown');
    let dropdown2 = document.getElementById('estado2-Dropdown');
     this.restApi.getEstados().subscribe((res)=>{
       const myObjStr = JSON.stringify(res)
       const json = JSON.parse(myObjStr);
      var count = Object.keys(json.data).length;
      for (var _i = 0; _i < count; _i++) {
        option = document.createElement('option');
        option.text = json.data[_i].Nombre;
        option.value = json.data[_i].IdEstado;
        dropdown.append(option);
     } 
     for (var _i = 0; _i < count; _i++) {
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

  modificar_estado_activo(activo,estado_activo){
    //console.log(activo);
  }
  asignar_activo(activo,fecha_asignacion,codigo,id_empleado,detalle_entrega){
   // console.log(activo);

  }
  selected(activo){
    //console.log(activo);
    //this.codigos = this.restApi.getCodigos();

  }
  
   

}


