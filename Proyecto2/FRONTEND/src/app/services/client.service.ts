import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';

@Injectable()
export class ClientService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}

	
	public register(body) : Observable<any[]>{
	    const url = "http://localhost:3000/api/vehiculo/update"
	    return this.http.post<any[]>(url,body, this.headers);
	}

	public editClient(client,code):Observable<GeneralResponse>{
		const url = Urls.baseUrl+'usuario/'+code;
	    return this.http.put<GeneralResponse>(url,client, this.headers);
	}
	public getClients():Observable<GeneralResponse>{
		const url = Urls.baseUrl+'usuarios';
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
}