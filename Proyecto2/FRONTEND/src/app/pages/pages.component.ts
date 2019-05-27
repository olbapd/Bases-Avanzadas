import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { CatalogService} from '../services/catalog.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  
})
export class PagesComponent {
	showAdmin : any;
	showBook : any;
	showPromo : any;
	showOrder : any;
	showReport : any;
	showClient : any;
	showAuth : any;
	showAllClient:any;
	showClientBook:any;
	showOrderHistory:any;
	showPlaceOrder:any;
	showReportGerente:any;

	constructor(private router: Router,
				private catalogService: CatalogService){
		let user= JSON.parse(localStorage.getItem('user'));
		this.showAdmin =true;
		this.showBook =true;
		this.showPromo =true;
		this.showOrder =true;
		this.showReport =true;
		this.showAuth =true;
		this.showClient=true;
		this.showAllClient=false;
		this.showClientBook=false
		this.showOrderHistory=false;
		this.showReportGerente=false;
		this.showPlaceOrder=false;
		if( user.tipoUsuario == 0){ //Gerente
			this.showClient=false;
			this.showAllClient=true;
			this.showReportGerente=true;
		}
		else if( user.tipoUsuario == 1){ //Administrator
			this.showAdmin =false;
			this.showOrder=false;
			this.showClient=false;
			this.showAllClient=true;
		}
		else if( user.tipoUsuario == 2){ //Client
			this.showAdmin =false;
			this.showReport=false;
			this.showClientBook=true;
			this.showBook=false;
			this.showPromo=false;
			this.showOrderHistory=true;
			this.showOrder=false;
			this.showPlaceOrder=true;
		}
		else if( user.tipoUsuario == 3){ //Agent
			this.showAdmin =false;
			this.showReport=false;
			this.showBook=false;
			this.showPromo=false;
			this.showClient=false;
			this.showAllClient=true;
		}
	}
	comment(){
		Swal({
		  input: 'textarea',
		  title:  'Leave a Comment About Our Service.',
		  confirmButtonText: 'Yes, submit!',
		  inputPlaceholder: 'I liked ...',
		  showCancelButton: true
		}).then((result) => {
	      if (result.value) {
	      	let body={
	      		libreria_id:'JF0001',
	      		comentario:  result.value
	      	}
	      	this.catalogService.addComment(body)
	      		.subscribe((res)=>{
	      			if(res.status){
	      				console.log("succes");
	      			}
	      		})
	      }
	    })
	}

	logout(){
	  this.router.navigate(['/auth/login']);
	}

}
