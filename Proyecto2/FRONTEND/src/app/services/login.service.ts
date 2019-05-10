import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { LoginResponse } from '../models/login';

@Injectable()
export class AuthService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}
	
	public Testlogin(email, password){
		let body = {
			Email:email,
			Password: password
		}
		return true;
	    
	}
	public login(email, password) : Observable<LoginResponse>{
		let body = {
			usuario:email,
			contrasena: password
		}
	    const url = Urls.baseUrl+ "login"
	    return this.http.post<LoginResponse>(url,body, this.headers);
	}

	public register(body) : Observable<any[]>{
	    const url = "http://localhost:3000/api/vehiculo/update"
	    return this.http.post<any[]>(url,body, this.headers);
	}
}