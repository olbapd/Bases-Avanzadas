import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {urls} from '../config/constants';
import {HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
}) 

export class RestApiService {
  
  // Define API
  apiURL = urls.urlbase;

  constructor(private http: HttpClient) {

   }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getCalculos() {
    let body= {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"sp_calculos"
              }
    ;
    return this.http.post (this.apiURL+urls.sp_url+'calculos',body).pipe(retry(1),catchError(this.handleError));
  }

  getSate(username,password) {

    let body ={
      "email":username,
      "pass":password
    }

   return  this.http.post(this.apiURL+urls.auth_url,body).pipe(retry(1),catchError(this.handleError));
  }
  getSedes() {
    let body= {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getSede"
              }
    ;
    return this.http.post (this.apiURL+urls.sp_url+'getSedes',body).pipe(retry(1),catchError(this.handleError));
  }

  getSedeXEmpleado(idEmpleado) {
    let body= {
                "typesIn":["int"],
                "typesOut":[],
                "parameters":["idEmpleado"],
                "values":[idEmpleado],
                "ouputs":[],
                "name":"infoSedeXEmpleado"
              }
    ;
    return this.http.post (this.apiURL+urls.sp_url+'infoSedeXEmpleado',body).pipe(retry(1),catchError(this.handleError));
  }

  getMonedas() {
    let body= {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getMonedas"
              }
    return this.http.post (this.apiURL+urls.sp_url+'getMonedas',body).pipe(retry(1),catchError(this.handleError));
  }
  

  getProvincias() {
    let body={
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getProvincia"
              }
    ;
    return this.http.post (this.apiURL+urls.sp_url+'getProvincias',body).pipe(retry(1),catchError(this.handleError));
  }

  getEstados() {

    let body = {
      "typesIn":[],
      "typesOut":[],
      "parameters":[],
      "values":[],
      "ouputs":[],
      "name":"getEstado"
    }
    return this.http.post (this.apiURL+urls.sp_url+'getEstado',body).pipe(retry(1),catchError(this.handleError));
  }

  getCategorias() {
    let body = {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getCategoria"
              };
   return this.http.post (this.apiURL+urls.sp_url+'getCategoria',body).pipe(retry(1),catchError(this.handleError));
  }

  getProvincia() {
    let body = {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getProvincia"
              }
   return this.http.post (this.apiURL+urls.sp_url+'getProvincia',body).pipe(retry(1),catchError(this.handleError));
  }

  getDistritos() {
    let body = {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getProvincia"
              }
   return this.http.post (this.apiURL+urls.sp_url+'getDistrito',body).pipe(retry(1),catchError(this.handleError));
  }
  getDepartamento() {
    let body = {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getDepartamento"
              }
   return this.http.post (this.apiURL+urls.sp_url+'getDepartamento',body).pipe(retry(1),catchError(this.handleError));
  }
  getPuesto() {
    let body = {
                "typesIn":[],
                "typesOut":[],
                "parameters":[],
                "values":[],
                "ouputs":[],
                "name":"getPuesto"
              }
   return this.http.post (this.apiURL+urls.sp_url+'getPuesto',body).pipe(retry(1),catchError(this.handleError));
  }

  getCodigoDynamic(idEstado,idCategoria){
    let body ={
                "typesIn":["int","int"],
                "typesOut":[],
                "parameters":["IdEstado","idCategoria"],
                "values":[idEstado,idCategoria],
                "ouputs":[],
                "name":"getActivoLi"
              }
    return this.http.post (this.apiURL+urls.sp_url+'getCodigoDynamic',body).pipe(retry(1),catchError(this.handleError));
  }

  getActivoXCodigo(Codigo) {
    let body={
      "typesIn":["varchar"],
      "typesOut":[],
      "parameters":["Codigo"],
      "values":[Codigo],
      "ouputs":[],
      "name":"getActivo"
    }
    
    return this.http.post (this.apiURL+urls.sp_url+'getActivoXCodigo',body).pipe(retry(1),catchError(this.handleError));
  }

  getCodigoXCategoria(idCategoria) {
    let body={
      "typesIn":["int"],
      "typesOut":[],
      "parameters":["idCategoria"],
      "values":[idCategoria],
      "ouputs":[],
      "name":"getActivoCat"
    }
    
    return this.http.post (this.apiURL+urls.sp_url+'getActivoXCat',body).pipe(retry(1),catchError(this.handleError));
  }

  getEstadoXCodigo(Codigo) {
    let body={
      "typesIn":["varchar"],
      "typesOut":[],
      "parameters":["Codigo"],
      "values":[Codigo],
      "ouputs":[],
      "name":"getActivoEst"
    }
    
    return this.http.post (this.apiURL+urls.sp_url+'getEstadoXCodigo',body).pipe(retry(1),catchError(this.handleError));
  }
  getEmpleadosXSede(idSede){
   let body= {
                "typesIn":["int"],
                "typesOut":[],
                "parameters":["IdSede"],
                "values":[idSede],
                "ouputs":[],
                "name":"getEmpleadoXSede"
              }
   return this.http.post (this.apiURL+urls.sp_url+'getEmpleadoXSede',body).pipe(retry(1),catchError(this.handleError));
  }

  getQuitarActivo(Codigo,IdEstado) {
    let body={
              "typesIn":["varchar","int"],
              "typesOut":[],
              "parameters":["Codigo","IdEstado"],
              "values":[Codigo,IdEstado],
              "ouputs":[],
              "name":"quitarActivo"
            }
    
    return this.http.post (this.apiURL+urls.sp_url+'quitarActivo',body).pipe(retry(1),catchError(this.handleError));
  }
  quitarEmpleado(Cedula){
    let body={
              "typesIn":["varchar"],
              "typesOut":[],
              "parameters":["Cedula"],
              "values":[Cedula],
              "ouputs":[],
              "name":"desEmpleado"
            }
     return this.http.post (this.apiURL+urls.sp_url+'desEmpleado',body).pipe(retry(1),catchError(this.handleError));
  }

  setAssignActivo(Codigo,Cedula,DetalleUbi){

    let body={
                "codigo" : Codigo,
                "cedula" : Cedula,
                "idEstado" : 3,
                "detalleUbi" : DetalleUbi
              }
     return this.http.post (this.apiURL+urls.activo_url,body).pipe(retry(1),catchError(this.handleError));

  }

  setSede(Nombre,Ubicacion,IdDistrito,IdEstado){
    let body={
                "typesIn":["varchar","varchar","input","input"],
                "typesOut":[],
                "parameters":["NombreS","Ubicacion","IdDistrito","IdEstado"],
                "values":[Nombre,Ubicacion,IdDistrito,IdEstado],
                "ouputs":[],
                "name":"setSede"
              }
    return this.http.post (this.apiURL+urls.sp_url+'setSede',body).pipe(retry(1),catchError(this.handleError));

  }
  setEmpleado(Nombre,Apellido1,Apellido2,Cedula,FechaN,FechaIngreso,Correo,Contrasena,IdDepartamento,IdPuesto,Foto){
    let body={
              "typesIn":["varchar","varchar","varchar","varchar","date","date","varchar","varchar","int","int","int","varchar"],
              "typesOut":[],
              "parameters":["Nombre","Apellido1","Apellido2","Cedula","FechaN","FechaIngreso","Correo","Contrasena","IdDepartamento","IdPuesto","IdSede","Foto"],
              "values":[Nombre,Apellido1,Apellido2,Cedula,FechaN,FechaIngreso,Correo,Contrasena,IdDepartamento,IdPuesto,1,Foto],
              "ouputs":[],
              "name":"setEmpleado"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setEmpleado',body).pipe(retry(1),catchError(this.handleError));
  }

  setActivo(codigo,nombre,descripcion,foto,precio_compre,tiempo_garantia,vida_util,depreciacion,fecha_compra,FechaR,centro_costo,valor_residual,categoria,moneda) {
    let body= {
      "typesIn":["varchar","varchar","varchar","varchar","int","int","int","float","date","date","int","int","int" ,"int" ,"int"],
      "typesOut":[],
      "parameters":["Codigo","Nombre","Descripcion","Foto","Precio","TiempoGar","VidaU","PorcentajeD","FechaCompra","FechaAsig","CentroCosto","ValorResidual","IdCategoria","IdMoneda","IdEstado"],
      "values":[codigo,nombre,descripcion,foto,precio_compre,tiempo_garantia,vida_util,depreciacion,fecha_compra,FechaR,centro_costo,valor_residual,categoria,moneda,'4'],
      "ouputs":[],
      "name":"setActivo"
    }  
    return this.http.post (this.apiURL+urls.sp_url+'setActivo',body).pipe(retry(1),catchError(this.handleError));
  }
//AGREGAR VENTANA PARA ESTAS CONSULTAS---------------
  setCategoria(Nombre, Tangible){
    let body={
              "typesIn":["varchar","bit"],
              "typesOut":[],
              "parameters":["NombreC","Tangible"],
              "values":[Nombre,Tangible],
              "ouputs":[],
              "name":"setCategoria"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setCategoria',body).pipe(retry(1),catchError(this.handleError));
  }

  setDepartamento(Nombre){
    let body={
              "typesIn":["varchar"],
              "typesOut":[],
              "parameters":["NombreD"],
              "values":[Nombre],
              "ouputs":[],
              "name":"setDepartamento"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setDepartamento',body).pipe(retry(1),catchError(this.handleError));
  }

  setEstado(Nombre){
    let body={
              "typesIn":["varchar"],
              "typesOut":[],
              "parameters":["NombreE"],
              "values":[Nombre],
              "ouputs":[],
              "name":"setEstado"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setEstado',body).pipe(retry(1),catchError(this.handleError));
  }

  setMoneda(Nombre){
    let body={
              "typesIn":["varchar"],
              "typesOut":[],
              "parameters":["NombreM"],
              "values":[Nombre],
              "ouputs":[],
              "name":"setMoneda"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setMoneda',body).pipe(retry(1),catchError(this.handleError));
  }
  setPuesto(Nombre){
    let body={
              "typesIn":["varchar"],
              "typesOut":[],
              "parameters":["NombreP"],
              "values":[Nombre],
              "ouputs":[],
              "name":"setPuesto"
            }
     return this.http.post (this.apiURL+urls.sp_url+'setPuesto',body).pipe(retry(1),catchError(this.handleError));
  }
//--------------------------------------
  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}