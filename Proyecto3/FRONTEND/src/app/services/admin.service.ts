import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';


@Injectable()
export class AdminService {
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}
	
	public InsertCompany(idCompany,name,description,typeC,latitude,longitude,address,roundsman,phone,website,rating,schedule,photo) : Observable<GeneralResponse>{
		let body = {
			idCompany:idCompany,
			name:name,
			description:description,
			typeC:typeC,
			latitude:latitude,
			longitude:longitude,
			address:address,
			roundsman:roundsman,
			phone:phone,
			website:website,
			rating:rating,
			schedule:schedule,
			photo:"",
		}
		const url = Urls.baseUrl+ "company"
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	    
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