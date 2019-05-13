import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';

@Injectable()
export class PromoService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}

	public getPromo():Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'promociones';
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public deletePromo(code):Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'promocion/'+code;
	 	return this.http.delete<GeneralResponse>(url, this.headers);
	}

	public editPromo(promo,code):Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'promocion/'+code;
	 	return this.http.put<GeneralResponse>(url,promo, this.headers);
	}

	public addPromo(promo):Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'promociones';
	 	return this.http.post<GeneralResponse>(url,promo, this.headers);
	}
}