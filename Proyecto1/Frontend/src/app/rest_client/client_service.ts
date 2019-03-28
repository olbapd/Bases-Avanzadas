import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {urls} from '../config/constants';


@Injectable({
  providedIn: 'root'
}) 

export class RestApiService {
  
  // Define API
  apiURL = urls.urlbase;

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => auth login
  getSate(username,password) {
    let body= {
               typesIn:['varchar','varchar'],
               typesOut:[],
               parameters:['CorreoEmp','Contrasena'],
               values:[username,password],
               outputs:[], //falta  output
               name:'Validacion'
              };

   return  this.http.post (this.apiURL+'getLogIn',body).pipe(retry(1),catchError(this.handleError));
  }

  getProvincias(datos) {
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

  getActivos() {
    //let body;
    //return this.http.post (this.apiURL+urls.sp_url+'getActivos',body).pipe(retry(1),catchError(this.handleError));
  }

  getCodigos() {
    //let body;
    //return this.http.post (this.apiURL+urls.sp_url+'getCodigos',body).pipe(retry(1),catchError(this.handleError));
  }

  putSede(name, code, description, provincia, canton, distrito, estado, employee, fecha_ingreso){
    let body;
    return this.http.post (this.apiURL+urls.sp_url+'putSede',body).pipe(retry(1),catchError(this.handleError));

  }

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