import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';

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
	public login(email, password) : Observable<GeneralResponse>{
		let body = {
			username:email,
			pass: password
		}
		console.log(body);
	    const url = Urls.baseUrl+ "login"
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}

	public register(idCard,name,surname1,surname2,borndate,email,phone,username,pass,typeUser) : Observable<GeneralResponse>{
		
		console.log("ENTRE A REGISTRO ");
		let body = {
			idCard:idCard,
			name: name,
			surname1:surname1,
			surname2:surname2,
			borndate:borndate,
			email:email,
			phone:phone,
			username:username,
			pass:pass,
			typeUser:typeUser
		}
		console.log(body);
	    const url = Urls.baseUrl+'user';
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}
}