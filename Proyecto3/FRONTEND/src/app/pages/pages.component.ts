import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


import Swal from 'sweetalert2';

@Component({
	selector: 'pages',
	templateUrl: './pages.component.html',

})
export class PagesComponent {
	user:any
	constructor(private router: Router) {
		let user1=JSON.parse(localStorage.getItem('user'));
		this.user=user1.typeUser;
	}

	logout() {
		this.router.navigate(['/auth/login']);
	}

}
