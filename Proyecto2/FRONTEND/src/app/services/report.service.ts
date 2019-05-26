import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';


@Injectable()
export class ReportService {
	
	headers : {headers : HttpHeaders}

	constructor(private http : HttpClient, private router : Router) {}

	public report1() : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"admin/consulta1";
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public report2() : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"admin/consulta2";
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
	
	public report3() : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"admin/consulta3";
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public report4() : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"admin/consulta4";
	    return this.http.get<GeneralResponse>(url, this.headers);
	}


	public reportGerente1(code) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"gerente/consulta1/"+code;
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public reportGerente2(code) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"gerente/consulta2/"+code;
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
	
	public reportGerente3(code) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"gerente/consulta3/"+code;
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public reportGerente4(code) : Observable<GeneralResponse>{
	    const url = Urls.baseUrl+"gerente/consulta4/"+code;
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

}