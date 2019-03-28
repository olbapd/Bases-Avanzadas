import { Component, OnInit } from '@angular/core';
import {RestApiService} from 'src/app/rest_client/client_service';
import { Router } from "@angular/router";
import{Estado} from 'src/app/interfaces/Estado'
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  constructor(public restApi: RestApiService,private router: Router) {
    let optionestado;
    let optioncategoria;
   }

  ngOnInit() {
    this.EstadoDropdown1();
    this.CategoriaDropdown1();
    this.EstadoDropdown2();
    this.CategoriaDropdown2();
    //this.activos = this.restApi.getActivos(); 
  }

  EstadoDropdown1(){
    let optionestado;
     
    let dropdown = document.getElementById('estado1-Dropdown');

     this.restApi.getEstados().subscribe((res)=>{
      var count = Object.keys(res.data).length;
      for (var _i = 0; _i < count; _i++) {
        optionestado = document.createElement('option');
        optionestado.text = res.data[_i].Nombre;
        optionestado.value = res.data[_i].IdEstado;
        dropdown.append(optionestado);
       // dropdown_estado2.append(option);
     }    
  });;
  }

  CategoriaDropdown1(){
    let optioncategoria;
    let dropdown = document.getElementById('categoria-Dropdown');

    this.restApi.getCategorias().subscribe((res)=>{
      var count = Object.keys(res.data).length;
      for (var _i = 0; _i < count; _i++) {
        optioncategoria = document.createElement('option');
        optioncategoria.text = res.data[_i].Nombre;
        optioncategoria.value = res.data[_i].IdCategoria;
        dropdown.append(optioncategoria);
     }    
  });;
  }

  EstadoDropdown2(){
    let optionestado;
     
    let dropdown = document.getElementById('estado2-Dropdown');

     this.restApi.getEstados().subscribe((res)=>{
      var count = Object.keys(res.data).length;
      for (var _i = 0; _i < count; _i++) {
        optionestado = document.createElement('option');
        optionestado.text = res.data[_i].Nombre;
        optionestado.value = res.data[_i].IdEstado;
        dropdown.append(optionestado);
       // dropdown_estado2.append(option);
     }    
  });;
  }

  CategoriaDropdown2(){
    let optioncategoria;
    let dropdown = document.getElementById('categoria2-Dropdown');

    this.restApi.getCategorias().subscribe((res)=>{
      var count = Object.keys(res.data).length;
      for (var _i = 0; _i < count; _i++) {
        optioncategoria = document.createElement('option');
        optioncategoria.text = res.data[_i].Nombre;
        optioncategoria.value = res.data[_i].IdCategoria;
        dropdown.append(optioncategoria);
     }    
  });;
  }


  registrar_activo(nombre,descripcion,fecha_compra,precio_compre,valor_residual,detalle_ubicacion,codigo,categoria,fecha_registro,tiempo_garantia,vida_util,centro_costo,estado){
    console.log(estado);
    
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


