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
	
	constructor(private router: Router){
		let type= JSON.parse( localStorage.getItem('user'));
		this.showAdmin =true;
		this.showBook =true;
		this.showPromo =true;
		this.showOrder =true;
		this.showReport =true;
		this.showAuth =true;
		this.showClient=true;
		if( type.userType == 1){ //Gerente
			this.showClient=false;
			this.showOrder=false;
		}
		else if( type.userType == 2){ //Administrator
			this.showAdmin =false;
			this.showOrder=false;
		}
		else if( type.userType == 3){ //Agent
			this.showAdmin =false;
			this.showReport=false;
		}
		else if( type.userType == 4){ //Client
			this.showAdmin =false;
			this.showReport=false;
		}

		console.log(type);
	}

	logout(){
	  this.router.navigate(['/auth/login']);
	}
}
