import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Urls } from '../config/constants';



@Injectable()
export class ReportService {
	
	headers : {headers : HttpHeaders}
	
	categories=[
	{
		value:1,
		name: "Ingeniería"
	},{
		value:2,
		name: "Administración"
	},{
		value:3,
		name: "Ciencias Naturales" 
	},{
		value:4,
		name: "Artes"
	},{
		value:5,
		name: "Historia"
	},{
		value:6,
		name: "Matemáticas"
	},{
		value:7,
		name: "Ficción"
	},{
		value:8,	
		name: "Literatura"
	}]

	books=[
	{
		value:1,
		name: "Book1"
	},{
		value:2,
		name: "Book2"
	},{
		value:3,
		name: "Book3" 
	},{
		value:4,
		name: "Book4"
	},{
		value:5,
		name: "Book5"
	}];

	clients= [
		{ name: 'Person1', value: 8940 },
	    { name: 'Person2', value: 5000 },
	    { name: 'Person3', value: 7200 }
	];

	constructor(private http : HttpClient, private router : Router) {}

	public login(email, password) : Observable<any[]>{
		let body = {
			Email:email,
			Password: password
		}
	    const url = "http://localhost:3000/api/vehiculo/insert"
	    return this.http.post<any[]>(url,body, this.headers);
	}
	public register(body) : Observable<any[]>{
	    const url = "http://localhost:3000/api/vehiculo/update"
	    return this.http.post<any[]>(url,body, this.headers);
	}

	public getCategories(): Observable<any[]>{
		const url = Urls.baseUrl + "";
		return this.http.get<any[]>(url,this.headers);
	}
	public testGetCategories(){
		return this.categories;
	}
	public getBooks(): Observable<any[]>{
		const url = Urls.baseUrl + "";
		return this.http.get<any[]>(url,this.headers);
	}
	public testGetBooks(){
		return this.books;
	}

	public getClients(): Observable<any[]>{
		const url = Urls.baseUrl + "";
		return this.http.get<any[]>(url,this.headers);
	}
	public testGetClients(){
		return this.clients;
	}
}