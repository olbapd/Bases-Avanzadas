import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';


@Injectable()
export class AdminService {
	
	headers : {headers : HttpHeaders}

	libraries=[
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

	public getLibraries() : Observable<any[]>{
		let body = {
			Email:"email",
			Password: "password"
		}
	    const url = "http://localhost:3000/api/vehiculo/insert"
	    return this.http.post<any[]>(url,body, this.headers);
	}
	public testGetLibraries() {
		return this.libraries;
	}
}