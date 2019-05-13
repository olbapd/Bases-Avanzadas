import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';



@Injectable()
export class OrderService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}

	public getOrders(code) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+'pedido/libreria/'+code;
	    console.log(code);
	    return this.http.get<GeneralResponse>(url,this.headers);
	}
}