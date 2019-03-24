import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {JsonManagment} from 'src/app/json_managment/json_service';
import {urls} from '../config/constants';


@Injectable({
  providedIn: 'root'
}) 

export class RestApiService {
  
  // Define API
  apiURL = urls.urlbase;

  constructor(private http: HttpClient, public json: JsonManagment) { }

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
    let result;
    let body;
    this.http.post (this.apiURL+'/mundo',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      result = this.json.parseLogin(res);
  });
    return result;
  }

  getProvincias(datos) {
    let result;
    let body;
    this.http.post (this.apiURL+urls.sp_url+'getProvincias',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      console.log(res);
      //bla = this.json.parseLogin(res);
  });
    return result;
  }

  

  getEstados() {
    let result;
    let body;
    this.http.post (this.apiURL+urls.sp_url+'getEstado',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      console.log('Estados:' + res);
      result = this.json.parseGet(res);
  });
    return result;
  }

  getCategorias() {
    let result;
    let body;
    this.http.post (this.apiURL+urls.sp_url+'getCategoria',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      console.log('Categorias:' + res);
      result = this.json.parseGet(res);
  });
    return result;
  }

  getActivos() {
    let result;
    let body;
    this.http.post (this.apiURL+urls.sp_url+'getActivos',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      console.log('Activos:' + res);
      result = this.json.parseGet(res);
  });
    return result;
  }

  getCodigos() {
    let result;
    let body;
    this.http.post (this.apiURL+urls.sp_url+'getCodigos',body).pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
      console.log('Codigos:' + res);
      result = this.json.parseGet(res);
  });
    return result;
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