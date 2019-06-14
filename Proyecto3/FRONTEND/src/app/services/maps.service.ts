import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';

@Injectable()
export class MapsService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}
	
	public Testlogin(email, password){
		let body = {
			Email:email,
			Password: password
		}
		return true;
	    
	}
	public login(email, password) : Observable<GeneralResponse>{
		let body = {
			usuario:email,
			contrasena: password
		}
	    const url = Urls.baseUrl+ "login"
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}

	public register(body) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+'usuarios';
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}
}