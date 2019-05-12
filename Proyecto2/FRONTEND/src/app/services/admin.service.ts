import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';

import { GeneralResponse } from '../models/response';

@Injectable()
export class AdminService {
	
	headers : {headers : HttpHeaders}
	urlBookstore= 'librerias';

	bookstores=[
      {
            _id: "JF0001",
            nombre: "Jose FIgueres Ferrer",
            pais: 0,
            ubicacion: "Cartago-TEC",
            telefono: "25744035",
            horario: "L a V: 7:30am-5:00pm",
            foto: '../../../../assets/bookstore.png'
       }
    ]
	

	constructor(private http : HttpClient, private router : Router) {}

	public getBookstores() : Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'librerias';
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
	public testGetBookstores() {
		return this.bookstores;
	}

	public addBookstore(bookstore): Observable<any>{
		const url = Urls.baseUrl +this.urlBookstore;
		return this.http.post<any>(url,bookstore, this.headers);
	}

	public editBookstore(bookstore,param):Observable<any>{
		const url = Urls.baseUrl+"libreria/"+param;
		console.log(url);
		console.log(bookstore);
		return this.http.put<any>(url,bookstore,this.headers);
	}

	public deleteBookstore(param):Observable<GeneralResponse>{
		const url = Urls.baseUrl+"libreria/"+param;
	    return	this.http.delete<GeneralResponse>(url,this.headers);
	}
}