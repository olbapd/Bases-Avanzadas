import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';

import { GeneralResponse } from '../models/response';



@Injectable()
export class BookService {
	
	headers : {headers : HttpHeaders}
	
	constructor(private http : HttpClient, private router : Router) {}

	public getBooks(code):Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'libroXlibreria/'+code;
	    return this.http.get<GeneralResponse>(url, this.headers);
	}
	public getAllBooks():Observable<GeneralResponse>{
		const url = Urls.baseUrl+ 'libros';
	    return this.http.get<GeneralResponse>(url, this.headers);
	}

	public deleteBook(code):Observable<GeneralResponse>{
		const url = Urls.baseUrl+'libro/'+code;
		return this.http.delete<GeneralResponse>(url,this.headers);
	}

	public editBook(book,issn):Observable<GeneralResponse>{
		const url = Urls.baseUrl+'libro/'+issn;
		return this.http.put<GeneralResponse>(url,book,this.headers);	
	}
	public addBook(book):Observable<GeneralResponse>{
		const url = Urls.baseUrl+'libros';
		return this.http.post<GeneralResponse>(url,book,this.headers);	
	}
}