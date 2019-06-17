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
	public getCompany() : Observable<GeneralResponse>{
		
	    const url = Urls.baseUrl+ "company"
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
	public getProduct() : Observable<GeneralResponse>{
		
	    const url = Urls.baseUrl+ "product"
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public InsertProduct(id,name,description,value,company,photo) : Observable<GeneralResponse>{
	    let body = {
			idProduct:id,
			name:name,
			description:description,
			price:value,
			photo:photo,
			idCompany:company
		}
		const url = Urls.baseUrl+ "product"
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}
	public deleteCompany(param):Observable<GeneralResponse>{
		const url = Urls.baseUrl+"company/"+param;
	    return	this.http.delete<GeneralResponse>(url,this.headers);
	}
	public deleteProduct(param):Observable<GeneralResponse>{
		const url = Urls.baseUrl+"product/"+param;
	    return	this.http.delete<GeneralResponse>(url,this.headers);
	}
}