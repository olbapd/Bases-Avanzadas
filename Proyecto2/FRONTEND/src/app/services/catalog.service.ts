import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';

import { GeneralResponse } from '../models/response';

@Injectable()
export class CatalogService {
	
	headers : {headers : HttpHeaders};

	countries= [
      {
        _id:1,
        nombre:"USA"
      },{
        _id:2,
        nombre:"Spain"
      },{
        _id:3,
        nombre:"France"
      }
    ]

	constructor(private http : HttpClient, private router : Router) {}

	public getCountries() : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"paises"
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public testGetCountries(){
		return this.countries;
	}
	
	public getCategories():Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"temas"
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public addComment(body):Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"rating"
	    return this.http.post<GeneralResponse>(url,body, this.headers);
	}
}