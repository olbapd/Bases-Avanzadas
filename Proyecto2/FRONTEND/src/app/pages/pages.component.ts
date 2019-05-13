import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

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
	
	constructor(private router: Router){
		let user= JSON.parse( localStorage.getItem('user'));
		this.showAdmin =true;
		this.showBook =true;
		this.showPromo =true;
		this.showOrder =true;
		this.showReport =true;
		this.showAuth =true;
		this.showClient=true;
		this.showAllClient=false;
		if( user.tipoUsuario == 0){ //Gerente
			this.showClient=false;
			this.showOrder=false;
			this.showAllClient=true;
		}
		else if( user.tipoUsuario == 1){ //Administrator
			this.showAdmin =false;
			this.showOrder=false;
			this.showClient=true;
		}
		else if( user.tipoUsuario == 2){ //Client
			this.showAdmin =false;
			this.showReport=false;
		}
		else if( user.tipoUsuario == 3){ //Agent
			this.showAdmin =false;
			this.showReport=false;
		}
		console.log(user.tipoUsuario);
	}

	logout(){
	  this.router.navigate(['/auth/login']);
	}
}
