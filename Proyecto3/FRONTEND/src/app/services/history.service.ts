import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';
import { GeneralResponse } from '../models/response';

@Injectable()
export class HistoryService {

	headers: { headers: HttpHeaders }

	constructor(private http: HttpClient, private router: Router) { }
	public getPedidos(user): Observable<GeneralResponse> {
		console.log(user);
		const url = Urls.baseUrl + 'orderBYuser/' + user;
		return this.http.get<GeneralResponse>(url, this.headers);
	}
}