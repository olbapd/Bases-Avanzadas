import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
}) 

export class RestApiService {
  
  // Define API
  apiURL = 'https://315d0d5d-7e7c-4632-834c-6e7270edb49f.mock.pstmn.io';

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
    let result: string;
    this.http.get (this.apiURL+'/mundo')
    .pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe((res)=>{
      const myObjStr = JSON.stringify(res);
      console.log('return is ' + myObjStr);
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