import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
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
	
	constructor(private router: Router){
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
		if( user.tipoUsuario == 0){ //Gerente
			this.showClient=false;
			this.showAllClient=true;
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
	       	console.log(result.value)
	      }
	    })
	}

	logout(){
	  this.router.navigate(['/auth/login']);
	}

}
