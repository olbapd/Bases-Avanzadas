import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';

@Injectable()
export class ClientService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}

	public login(email, password) : Observable<any[]>{
		let body = {
			Email:email,
			Password: password
		}
	    const url = "http://localhost:3000/api/vehiculo/insert"
	    return this.http.post<any[]>(url,body, this.headers);
	}
	public register(body) : Observable<any[]>{
	    const url = "http://localhost:3000/api/vehiculo/update"
	    return this.http.post<any[]>(url,body, this.headers);
	}
}